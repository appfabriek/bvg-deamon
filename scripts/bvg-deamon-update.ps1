#requires -Version 5.1
<#
.SYNOPSIS
  Self-updater for bvg-deamon Windows-service. Runs daily via Scheduled Task.

.DESCRIPTION
  - Checks the GitHub Releases API for the latest stable (non-prerelease) tag.
  - Compares against the local version (version.txt next to the exe).
  - If newer: downloads bvg-deamon-windows-x64.zip + .sha256, verifies, extracts,
    swaps the exe atomically, restarts the service, rolls back on failure.
  - All progress logged to %ProgramData%\bvg-deamon\logs\updater.log.

  Operator opt-out:
    Disable-ScheduledTask -TaskName bvg-deamon-update
#>

[CmdletBinding()]
param(
  [string]$Repo        = "appfabriek/bvg-deamon",
  [string]$ServiceName = "bvg-deamon",
  [string]$InstallDir  = (Join-Path $env:ProgramData "bvg-deamon"),
  [switch]$Force       # ignore version comparison, always reinstall latest
)

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -bor 0x3000

$LogDir  = Join-Path $InstallDir "logs"
$LogPath = Join-Path $LogDir "updater.log"
$ExePath = Join-Path $InstallDir "bvg-deamon.exe"
$VerFile = Join-Path $InstallDir "version.txt"
$null = New-Item -ItemType Directory -Path $LogDir -Force -ErrorAction SilentlyContinue

function Log {
  param([string]$Level, [string]$Message)
  $ts = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss.fff")
  $line = "$ts [$Level] $Message"
  Add-Content -Path $LogPath -Value $line -Encoding UTF8 -ErrorAction SilentlyContinue
  Write-Host $line
}

function Get-LocalVersion {
  if (Test-Path $VerFile) {
    return (Get-Content $VerFile -Raw -ErrorAction SilentlyContinue).Trim()
  }
  if (Test-Path $ExePath) {
    try { return (& $ExePath --version 2>&1 | Select-Object -First 1).Trim() } catch { }
  }
  return "0.0.0"
}

function Compare-SemVer {
  param([string]$A, [string]$B)
  # Returns 1 if A > B, -1 if A < B, 0 if equal. Stable-only path: pre-release
  # tags are filtered upstream, so [System.Version] parsing is enough.
  try {
    $va = [Version]($A -replace '[^\d\.]', '')
    $vb = [Version]($B -replace '[^\d\.]', '')
    return $va.CompareTo($vb)
  } catch { return 0 }
}

try {
  Log "INFO" "updater starting (install_dir=$InstallDir, repo=$Repo, force=$Force)"

  $local = Get-LocalVersion
  Log "INFO" "local version: $local"

  # --- 1. Resolve latest stable release ----------------------------------
  Log "INFO" "querying GitHub Releases API..."
  $headers = @{ "User-Agent" = "bvg-deamon-updater"; "Accept" = "application/vnd.github+json" }
  $releases = Invoke-RestMethod -Uri "https://api.github.com/repos/$Repo/releases" -Headers $headers -UseBasicParsing -TimeoutSec 30
  $latest = $releases | Where-Object { -not $_.prerelease -and -not $_.draft } | Select-Object -First 1
  if (-not $latest) { Log "WARN" "no stable release found"; exit 0 }

  $remote = $latest.tag_name.TrimStart("v")
  Log "INFO" "latest stable: $remote (tag=$($latest.tag_name))"

  if (-not $Force -and (Compare-SemVer $remote $local) -le 0) {
    Log "INFO" "already at latest version ($local >= $remote) - nothing to do"
    exit 0
  }
  Log "INFO" "update available: $local -> $remote"

  # --- 2. Resolve asset URLs ---------------------------------------------
  $zipAsset = $latest.assets | Where-Object { $_.name -eq "bvg-deamon-windows-x64.zip" } | Select-Object -First 1
  $shaAsset = $latest.assets | Where-Object { $_.name -eq "bvg-deamon-windows-x64.zip.sha256" } | Select-Object -First 1
  if (-not $zipAsset) { Log "ERROR" "release $($latest.tag_name) has no bvg-deamon-windows-x64.zip asset"; exit 1 }

  # --- 3. Download to temp and verify checksum --------------------------
  $tmpDir = Join-Path $env:TEMP "bvg-deamon-update-$([guid]::NewGuid().ToString('N'))"
  New-Item -ItemType Directory -Path $tmpDir -Force | Out-Null
  $zipPath = Join-Path $tmpDir "bvg-deamon-windows-x64.zip"

  Log "INFO" "downloading $($zipAsset.browser_download_url)..."
  Invoke-WebRequest -Uri $zipAsset.browser_download_url -OutFile $zipPath -UseBasicParsing -TimeoutSec 300

  $localHash = (Get-FileHash -Path $zipPath -Algorithm SHA256).Hash.ToLower()
  if ($shaAsset) {
    $shaResp = Invoke-WebRequest -Uri $shaAsset.browser_download_url -UseBasicParsing -TimeoutSec 30
    # Invoke-WebRequest returns .Content as Byte[] when the server omits a text
    # Content-Type (which GitHub does for raw release assets). Always decode.
    $shaText = if ($shaResp.Content -is [byte[]]) {
      [System.Text.Encoding]::UTF8.GetString($shaResp.Content).Trim()
    } else {
      ([string]$shaResp.Content).Trim()
    }
    $expectedHash = ($shaText -split '\s+')[0].ToLower()
    if ($localHash -ne $expectedHash) {
      Log "ERROR" "sha256 mismatch (downloaded=$localHash expected=$expectedHash) - aborting"
      Remove-Item -Recurse -Force $tmpDir
      exit 2
    }
    Log "INFO" "sha256 verified ($localHash)"
  } else {
    Log "WARN" "no .sha256 asset in release - skipping checksum verification (downloaded=$localHash)"
  }

  # --- 4. Extract new exe ----------------------------------------------
  $extractDir = Join-Path $tmpDir "extract"
  Expand-Archive -Path $zipPath -DestinationPath $extractDir -Force
  $newExe = Join-Path $extractDir "bvg-deamon.exe"
  if (-not (Test-Path $newExe)) { Log "ERROR" "bvg-deamon.exe missing in extracted zip"; Remove-Item -Recurse -Force $tmpDir; exit 3 }

  # --- 5. Swap exe atomically + restart service ------------------------
  $backupExe = "$ExePath.previous"
  $stagedExe = "$ExePath.new"
  Copy-Item $newExe $stagedExe -Force

  Log "INFO" "stopping service '$ServiceName'..."
  try { Stop-Service -Name $ServiceName -Force -ErrorAction Stop; Start-Sleep -Seconds 2 }
  catch { Log "WARN" "stop-service failed: $($_.Exception.Message) - continuing anyway" }

  # Hold the old exe as fallback, then move the new one into place. Both
  # operations are NTFS atomic when the destination is in the same volume.
  if (Test-Path $ExePath) {
    if (Test-Path $backupExe) { Remove-Item $backupExe -Force }
    Rename-Item -Path $ExePath -NewName ([IO.Path]::GetFileName($backupExe)) -Force
  }
  Rename-Item -Path $stagedExe -NewName ([IO.Path]::GetFileName($ExePath)) -Force

  # Update version stamp + bring service back up.
  $remote | Set-Content -Path $VerFile -NoNewline -Encoding ASCII

  Log "INFO" "starting service with new version $remote..."
  try {
    Start-Service -Name $ServiceName -ErrorAction Stop
    Start-Sleep -Seconds 5
    $svc = Get-Service -Name $ServiceName
    if ($svc.Status -ne "Running") { throw "service status after start: $($svc.Status)" }
  }
  catch {
    Log "ERROR" "new version failed to start: $($_.Exception.Message)"
    Log "ERROR" "rolling back to previous exe..."
    try { Stop-Service -Name $ServiceName -Force -ErrorAction SilentlyContinue } catch { }
    Start-Sleep -Seconds 1
    if (Test-Path $backupExe) {
      if (Test-Path $ExePath) { Remove-Item $ExePath -Force }
      Rename-Item -Path $backupExe -NewName ([IO.Path]::GetFileName($ExePath)) -Force
      $local | Set-Content -Path $VerFile -NoNewline -Encoding ASCII
      try { Start-Service -Name $ServiceName -ErrorAction Stop; Log "INFO" "rollback complete, service running on $local" }
      catch { Log "ERROR" "rollback failed - service is down! manual intervention required: $($_.Exception.Message)" }
    } else {
      Log "ERROR" "no backup exe to rollback to - manual intervention required"
    }
    Remove-Item -Recurse -Force $tmpDir -ErrorAction SilentlyContinue
    exit 4
  }

  Remove-Item -Recurse -Force $tmpDir -ErrorAction SilentlyContinue
  Log "INFO" "update complete: $local -> $remote"
  exit 0
}
catch {
  Log "ERROR" "updater failed: $($_.Exception.Message)"
  Log "ERROR" "$($_.ScriptStackTrace)"
  exit 99
}

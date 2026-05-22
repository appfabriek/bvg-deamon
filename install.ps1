#requires -Version 5.1
<#
.SYNOPSIS
  bvg-deamon installer for Windows. Installs as a Windows service running
  under Local System, starts automatically at boot, restarts on crash.

.DESCRIPTION
  One-liner install:

    $env:BVG_JOIN_TOKEN   = "jt_..."
    $env:BVG_BVGEERT_HOST = "https://staging.rozendom.nl"
    $env:BVG_TRANSPORT    = "mijn-verbinding"   # optional
    iwr https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.ps1 -UseBasicParsing | iex

  The script self-elevates via UAC, downloads the latest
  bvg-deamon-windows-x64.zip release asset, redeems the join-token (HTTPS
  POST to /api/v1/transport/redeem), saves credentials.json (locked down
  to Administrators + SYSTEM), and registers the Windows service.

  Re-pair without reinstall:

    $env:BVG_DEAMON_CREDENTIALS = "$env:ProgramData\bvg-deamon\credentials.json"
    & "$env:ProgramData\bvg-deamon\bvg-deamon.exe" join --host <host> --token <jt_...>
    Restart-Service bvg-deamon
#>

[CmdletBinding()]
param(
  [string]$Repo        = "appfabriek/bvg-deamon",
  [string]$ServiceName = "bvg-deamon",
  [string]$InstallDir  = (Join-Path $env:ProgramData "bvg-deamon")
)

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -bor 0x3000

function Say($msg)  { Write-Host $msg -ForegroundColor Cyan }
function Done($msg) { Write-Host $msg -ForegroundColor Green }
function Fail($msg) { Write-Host $msg -ForegroundColor Red; exit 1 }

# --- 1. Self-elevate via UAC ---------------------------------------------
$IsAdmin = ([Security.Principal.WindowsPrincipal] `
  [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(
    [Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $IsAdmin) {
  Say "elevation required - relaunching with UAC prompt..."
  # Forward the env-vars the elevated session needs.
  $envFwd = @(
    "BVG_JOIN_TOKEN", "BVG_BVGEERT_HOST", "BVG_TRANSPORT", "BVG_AZURE_HUB"
  ) | ForEach-Object {
    $v = [Environment]::GetEnvironmentVariable($_)
    if ($v) { "`$env:$_ = '$($v -replace ""'"", ""''"")';" }
  }

  $scriptText = ($envFwd -join " ") + " " + `
    "iwr https://raw.githubusercontent.com/$Repo/main/install.ps1 -UseBasicParsing | iex"
  $encoded = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($scriptText))
  $pwsh = if (Get-Command pwsh.exe -ErrorAction SilentlyContinue) { "pwsh.exe" } else { "powershell.exe" }
  Start-Process -FilePath $pwsh `
    -ArgumentList @("-NoProfile", "-ExecutionPolicy", "Bypass", "-EncodedCommand", $encoded) `
    -Verb RunAs -Wait
  exit
}

# --- 2. Resolve required env-vars ----------------------------------------
$JoinToken   = $env:BVG_JOIN_TOKEN
$BvgeertHost = $env:BVG_BVGEERT_HOST
$Transport   = $env:BVG_TRANSPORT
$AzureHub    = $env:BVG_AZURE_HUB

if (-not $JoinToken) {
  Fail "BVG_JOIN_TOKEN is required. Get a join-token from the bvgeert admin (Admin > Connections > new client)."
}
if (-not $BvgeertHost -and -not $AzureHub) {
  Fail "BVG_BVGEERT_HOST is required (direct mode) or BVG_AZURE_HUB (azure mode)."
}

# --- 3. Download release asset -------------------------------------------
$null = New-Item -ItemType Directory -Force -Path $InstallDir
$ZipUrl  = "https://github.com/$Repo/releases/latest/download/bvg-deamon-windows-x64.zip"
$ZipPath = Join-Path $env:TEMP "bvg-deamon-windows-x64.zip"
$ExePath = Join-Path $InstallDir "bvg-deamon.exe"

Say "downloading $ZipUrl..."
try {
  Invoke-WebRequest -Uri $ZipUrl -OutFile $ZipPath -UseBasicParsing
} catch {
  Fail "download failed: $($_.Exception.Message)"
}

# Stop the service if it already runs so we can overwrite the exe.
$existing = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue
if ($existing -and $existing.Status -eq "Running") {
  Say "stopping existing service..."
  Stop-Service -Name $ServiceName -Force
  Start-Sleep -Seconds 2
}

Say "extracting to $InstallDir..."
Expand-Archive -Path $ZipPath -DestinationPath $InstallDir -Force
Remove-Item $ZipPath -Force -ErrorAction SilentlyContinue
if (-not (Test-Path $ExePath)) { Fail "bvg-deamon.exe not found after extract" }

# --- 4. One-time pair (redeem join-token) --------------------------------
$CredentialsPath = Join-Path $InstallDir "credentials.json"
$env:BVG_DEAMON_CREDENTIALS = $CredentialsPath

Say "pairing with bvgeert..."

# Try direct route first if BVG_BVGEERT_HOST is set. If direct fails AND BVG_AZURE_HUB
# is also set, fall back to the azure route — this covers restricted networks that
# can't reach bvgeert on 443 directly but do allow wss://*.webpubsub.azure.com:443.
$paired = $false

if ($BvgeertHost) {
  Say "  trying direct route via $BvgeertHost..."
  $directArgs = @("join", "--host", $BvgeertHost, "--token", $JoinToken)
  if ($Transport) { $directArgs += @("--transport", $Transport) }
  & $ExePath @directArgs
  if ($LASTEXITCODE -eq 0) {
    $paired = $true
    Done "  paired via direct route"
  } elseif ($AzureHub) {
    Say "  direct route failed (exit $LASTEXITCODE) - falling back to azure route"
  } else {
    Fail "direct route failed (exit $LASTEXITCODE) and no BVG_AZURE_HUB to fall back on"
  }
}

if (-not $paired -and $AzureHub) {
  if (-not $Transport) { Fail "BVG_TRANSPORT is required for azure route" }
  Say "  trying azure route via $AzureHub..."
  $azureArgs = @("join", "--hub", $AzureHub, "--transport", $Transport, "--token", $JoinToken)
  & $ExePath @azureArgs
  if ($LASTEXITCODE -eq 0) {
    $paired = $true
    Done "  paired via azure route"
  } else {
    Fail "azure route failed (exit $LASTEXITCODE)"
  }
}

if (-not $paired) { Fail "pairing failed - no route succeeded" }

# Defensive lock-down: bvg-deamon.exe already restricts the ACL on save, but
# enforce the spec ("SYSTEM + Administrators read only") explicitly here too.
if (Test-Path $CredentialsPath) {
  & icacls.exe $CredentialsPath /inheritance:r `
    /grant:r "SYSTEM:(F)" `
    /grant:r "Administrators:(R)" | Out-Null
}

# --- 5. Register Windows service -----------------------------------------
if ($existing) {
  Say "removing previous service registration..."
  & sc.exe delete $ServiceName | Out-Null
  Start-Sleep -Seconds 1
}

Say "registering service '$ServiceName'..."
& sc.exe create $ServiceName binPath= "`"$ExePath`"" start= auto DisplayName= "BvGeert transport daemon" obj= "LocalSystem" | Out-Null
if ($LASTEXITCODE -ne 0) { Fail "sc.exe create failed (exit $LASTEXITCODE)" }

# Restart-on-failure: 3 retries, 10s apart, reset counter after 1h.
& sc.exe failure $ServiceName reset= 3600 actions= restart/10000/restart/10000/restart/10000 | Out-Null

# Persist BVG_DEAMON_CREDENTIALS as a per-service env-var so the LocalSystem
# context reads from %ProgramData% instead of LOCALAPPDATA.
$envKey = "HKLM:\SYSTEM\CurrentControlSet\Services\$ServiceName"
$existingEnv = @()
try { $existingEnv = (Get-ItemProperty -Path $envKey -Name Environment -ErrorAction Stop).Environment } catch { }
$mergedEnv = @($existingEnv | Where-Object { $_ -notlike "BVG_DEAMON_CREDENTIALS=*" }) + "BVG_DEAMON_CREDENTIALS=$CredentialsPath"
New-ItemProperty -Path $envKey -Name Environment -PropertyType MultiString -Value $mergedEnv -Force | Out-Null

Say "starting service..."
& sc.exe start $ServiceName | Out-Null
Start-Sleep -Seconds 3
$svc = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue
if ($svc -and $svc.Status -eq "Running") {
  Done "service '$ServiceName' is running"
} else {
  Fail "service did not reach Running state - check $InstallDir\logs\"
}

Done "installation complete"
Write-Host ""
Write-Host "logs:        $InstallDir\logs\bvg-deamon-*.log"
Write-Host "credentials: $CredentialsPath"
Write-Host "service:     sc.exe query $ServiceName"
Write-Host "re-pair:     `$env:BVG_DEAMON_CREDENTIALS = '$CredentialsPath'; & '$ExePath' join --host <host> --token <jt_...>; Restart-Service $ServiceName"

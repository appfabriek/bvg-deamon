#requires -Version 5.1
# bvg-deamon installer for Windows.
#
# Usage:
#   iwr https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.ps1 -UseBasicParsing | iex
#
# Downloads the latest self-contained bvg-deamon.exe (.NET) to
# %LOCALAPPDATA%\bvg-deamon\ and adds that folder to the user PATH.

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 -bor 0x3000

$Repo    = "appfabriek/bvg-deamon"
$Install = Join-Path $env:LOCALAPPDATA "bvg-deamon"
$ExePath = Join-Path $Install "bvg-deamon.exe"
$null = New-Item -ItemType Directory -Force -Path $Install

function Say($msg) { Write-Host $msg -ForegroundColor Cyan }
function Done($msg) { Write-Host $msg -ForegroundColor Green }
function Fail($msg) { Write-Host $msg -ForegroundColor Red; exit 1 }

Say "downloading bvg-deamon.exe..."
$ReleaseUrl = "https://github.com/$Repo/releases/latest/download/bvg-deamon.exe"
try {
  Invoke-WebRequest -Uri $ReleaseUrl -OutFile $ExePath -UseBasicParsing
} catch {
  Fail "no release artefact found yet. Build it first via dotnet publish on the dev box (see CLAUDE.md)."
}

# Add to user PATH if missing.
$UserPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($UserPath -notlike "*$Install*") {
  [Environment]::SetEnvironmentVariable("Path", "$UserPath;$Install", "User")
  Say "added $Install to user PATH (restart shell to use)"
}

Done "bvg-deamon installed: $ExePath"
Say "next step (new shell): bvg-deamon join --hub <wss-url> --transport <identifier>"

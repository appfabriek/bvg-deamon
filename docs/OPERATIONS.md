# bvg-deamon — operations

Praktisch cookbook voor installeren, updaten, monitoren, troubleshooten en
verwijderen. Voor de "waarom"-vragen zie [ARCHITECTURE.md](ARCHITECTURE.md).

## Install

### Windows (one-liner)

In een **elevated PowerShell** (of laat de installer zelf UAC vragen):

```powershell
$env:BVG_JOIN_TOKEN   = "jt_..."                          # required
$env:BVG_BVGEERT_HOST = "https://staging.rozendom.nl"     # direct route
$env:BVG_TRANSPORT    = "my-connection"                   # optional
iwr https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.ps1 -UseBasicParsing | iex
```

Voor klanten op restricted networks die wellicht geen rechtstreekse HTTPS
naar bvgeert hebben — zet beide envs, installer kiest automatisch het pad
dat doorkomt:

```powershell
$env:BVG_JOIN_TOKEN   = "jt_..."
$env:BVG_BVGEERT_HOST = "https://staging.rozendom.nl"
$env:BVG_AZURE_HUB    = "wss://xxx.webpubsub.azure.com/client/hubs/<hub>"
$env:BVG_TRANSPORT    = "my-connection"
iwr https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.ps1 -UseBasicParsing | iex
```

Wat de installer doet (idempotent, herhaalbaar):
1. Self-elevate via UAC als nodig
2. Pre-flight: Windows ≥ 10, ≥ 200 MB vrij op `%ProgramData%`, github.com bereikbaar
3. Download laatste `bvg-deamon-windows-x64.zip` van GitHub Releases
4. Extract naar `%ProgramData%\bvg-deamon\`
5. Probeer direct-route join, fallback op azure-route als beide envs gezet en direct faalt
6. ACL credentials.json: alleen `SYSTEM:F` + `Administrators:R`
7. Registreer service met `sc.exe create` + `failure 3×10s restart`
8. Per-service registry env-var `BVG_DEAMON_CREDENTIALS`
9. Registreer Scheduled Task `bvg-deamon-update` (daily 03:00-05:00 + random minuut)
10. Start service

### Linux / macOS (one-liner)

```bash
export BVG_JOIN_TOKEN="jt_..."
export BVG_BVGEERT_HOST="https://staging.rozendom.nl"
export BVG_TRANSPORT="my-connection"
curl -fsSL https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.sh | bash
```

Wat de installer doet:
- Pre-flight: ≥ 250 MB vrij in `$HOME`, github.com bereikbaar
- Detect Node ≥ 22 — download naar `$LIB_DIR/node-v22.11.0/` als niet gevonden
- Download `bvg-deamon.js` bundle van release
- Pair, schrijf credentials in `~/.config/bvg-deamon/credentials.json` (mode 0600)
- systemd-user-unit (Linux) of launchd LaunchAgent (macOS) + auto-start
- Update-timer (Linux) of launchd-periodic (macOS): daily + random delay

## Verifieer dat het werkt

### Windows

```powershell
# 1. Service draait
Get-Service bvg-deamon                    # Status: Running

# 2. Versie
& "$env:ProgramData\bvg-deamon\bvg-deamon.exe" --version   # b.v. 0.4.1

# 3. Logs (gebruik FileShare-trick — Serilog houdt 'em open)
$log = (Get-ChildItem "$env:ProgramData\bvg-deamon\logs\bvg-deamon-*.log" | Sort-Object LastWriteTime -Descending | Select-Object -First 1).FullName
$fs = [System.IO.File]::Open($log, 'Open', 'Read', 'ReadWrite')
$r = [System.IO.StreamReader]::new($fs); $r.ReadToEnd(); $r.Close(); $fs.Close()

# 4. Update task gepland
Get-ScheduledTask -TaskName bvg-deamon-update | Select-Object State, NextRunTime

# 5. WSS-verbinding open
$pid_ = (Get-CimInstance Win32_Process -Filter "Name='bvg-deamon.exe'").ProcessId
Get-NetTCPConnection -OwningProcess $pid_ -State Established
```

Verwacht in het log na install:
```
[INF] bvg-deamon starting in direct mode (client_id=cl_..., connection=<transport>)
[INF] connecting WSS wss://.../cable
[INF] ws open
[INF] subscribing to TransportChannel (connection=<transport>)
[INF] subscription confirmed
```

### Linux / macOS

```bash
# Service draait
systemctl --user status bvg-deamon.service          # Linux
launchctl list | grep com.appfabriek.bvg-deamon     # macOS

# Versie
bvg-deamon --version

# Logs (Linux)
journalctl --user -u bvg-deamon.service -f

# Logs (macOS)
tail -f /tmp/bvg-deamon.log

# Update timer/agent
systemctl --user list-timers bvg-deamon-update.timer    # Linux
launchctl list com.appfabriek.bvg-deamon-update         # macOS

# Updater log
tail -f ~/.local/state/bvg-deamon/updater.log
```

## Update — handmatig forceren

Auto-update gebeurt dagelijks, maar je kunt het direct triggeren:

```powershell
# Windows — forceer de scheduled task
Start-ScheduledTask -TaskName bvg-deamon-update
# 30s wachten, dan log lezen
Start-Sleep 30
Get-Content "$env:ProgramData\bvg-deamon\logs\updater.log" -Tail 30
```

```bash
# Linux
systemctl --user start bvg-deamon-update.service
journalctl --user -u bvg-deamon-update.service -f

# macOS — run de script handmatig (launchd heeft geen one-shot trigger)
~/.local/lib/bvg-deamon/bvg-deamon-update.sh
```

Een **force-update** (ignore versie-vergelijking, herinstalleer ook al ben je
al up-to-date):

```powershell
& "$env:ProgramData\bvg-deamon\bvg-deamon-update.ps1" -Force
```

```bash
~/.local/lib/bvg-deamon/bvg-deamon-update.sh --force
```

## Re-pair (credentials vervangen zonder herinstalleren)

Nodig als bvgeert-admin een nieuwe join-token uitgeeft of als de oude
verloopt.

```powershell
# Windows
$env:BVG_DEAMON_CREDENTIALS = "$env:ProgramData\bvg-deamon\credentials.json"
& "$env:ProgramData\bvg-deamon\bvg-deamon.exe" join `
  --host https://staging.rozendom.nl `
  --token jt_NIEUW... `
  --transport my-connection
Restart-Service bvg-deamon
```

```bash
# Linux/macOS
bvg-deamon join --host https://staging.rozendom.nl --token jt_NIEUW... --transport my-connection
systemctl --user restart bvg-deamon.service   # Linux
launchctl kickstart -k gui/$(id -u)/com.appfabriek.bvg-deamon   # macOS
```

## Opt-out auto-update

Klanten die zelf in controle willen blijven over wanneer ze updaten:

```powershell
# Windows
Disable-ScheduledTask -TaskName bvg-deamon-update
```

```bash
# Linux
systemctl --user disable --now bvg-deamon-update.timer

# macOS
launchctl unload ~/Library/LaunchAgents/com.appfabriek.bvg-deamon-update.plist
```

Re-enablen werkt met `Enable-ScheduledTask` / `systemctl --user enable --now` /
`launchctl load` (zelfde flow als install).

## Troubleshoot

### "service did not reach Running state"

Vermoedelijk:
- credentials missing — installer-output should explain. Check `%ProgramData%\bvg-deamon\credentials.json` exists.
- credentials malformed of mode-detect faalt — open de file, check `bvgeert_host` of `azure_hub_url` aanwezig.
- Server-side: token expired/revoked, of webhook config kapot. Check `Transport::JoinToken.unscoped.order(created_at: :desc).first` op staging.

Logs:
```powershell
$log = "$env:ProgramData\bvg-deamon\logs\bvg-deamon-$(Get-Date -f yyyyMMdd).log"
$fs = [System.IO.File]::Open($log, 'Open', 'Read', 'ReadWrite')
[System.IO.StreamReader]::new($fs).ReadToEnd(); $fs.Close()
```

### "subscription rejected" in log

`transport_token` (direct mode) of `access_url` (azure mode) verlopen. Re-pair
met een nieuwe `--token` (zie hierboven). De service herstart-policy probeert
het 3× elke 10s — daarna stoppt 'ie tot operator actie onderneemt.

### Updater zegt "manual intervention required"

De rollback faalde — er staat geen werkende exe meer. Acties:
1. Stop de service: `Stop-Service bvg-deamon -Force`
2. Inspect `%ProgramData%\bvg-deamon\` — meestal vind je `bvg-deamon.exe.previous` of `bvg-deamon.exe.new` daar
3. Rename de werkende terug naar `bvg-deamon.exe`
4. `Start-Service bvg-deamon`
5. `Disable-ScheduledTask -TaskName bvg-deamon-update` tot het issue gevonden en gefixt is

In de praktijk is dit zeldzaam (rollback-fail = service-API werkt niet
correct). Tot nu toe niet voorgekomen in productie of testen.

### Geen broadcasts ontvangen

1. Verifieer dat de daemon `subscription confirmed` heeft gelogd (direct) of `connected — userId=cl_...` (azure)
2. Server-side check: maakte de fanout een `Transport::Delivery` aan? Voor azure: heeft je Client een `azure_web_pubsub` endpoint?
3. Test broadcast:
   ```ruby
   conn = Transport::Connection.unscoped.find_by(identifier: "my-connection")
   Current.domain = conn.domain
   msg = Transport::Message.publish(connection: conn, sender: nil,
     message_type: "ops-test", content_type: "text/plain",
     payload: "ping at #{Time.now.iso8601}")
   Transport::Router.fanout(msg)
   ```

## Uninstall

```powershell
# Windows (vereist UAC)
iwr https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/uninstall.ps1 -UseBasicParsing | iex

# Of behoud credentials/logs voor latere re-install:
& "$env:ProgramData\bvg-deamon\uninstall.ps1" -KeepFiles
```

```bash
# Linux
systemctl --user disable --now bvg-deamon.service bvg-deamon-update.timer
rm -rf ~/.config/systemd/user/bvg-deamon* ~/.config/bvg-deamon /usr/local/lib/bvg-deamon /usr/local/bin/bvg-deamon

# macOS
launchctl unload ~/Library/LaunchAgents/com.appfabriek.bvg-deamon*.plist
rm -rf ~/Library/LaunchAgents/com.appfabriek.bvg-deamon*.plist ~/.config/bvg-deamon /usr/local/lib/bvg-deamon /usr/local/bin/bvg-deamon
```

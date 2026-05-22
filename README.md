# bvg-deamon

Transport-client voor het BvGeert-netwerk. Twee modi in één binary:

- **Direct** (default, nieuw) — HTTPS naar `bvgeert` voor de eenmalige pairing
  (`POST /api/v1/transport/redeem`) en daarna een doorlopende WSS-verbinding
  naar `/cable` (Rails ActionCable, sub-protocol `actioncable-v1-json`).
- **Azure** (legacy / restricted networks) — pure Azure Web PubSub. Werkt
  vanaf sites die alleen `wss://*.webpubsub.azure.com:443` uit mogen.

Welke modus actief is wordt afgeleid uit de credentials: `bvgeert_host`
betekent direct, `azure_hub_url` betekent azure.

## Install — single line

**macOS / Linux** (Node-bundle, gebruikersservice via `systemd --user`):

```bash
export BVG_JOIN_TOKEN="jt_..."
export BVG_BVGEERT_HOST="https://staging.rozendom.nl"
export BVG_TRANSPORT="my-connection"   # optional
curl -fsSL https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.sh | bash
```

**Windows** (zelf-contained .NET-exe, draait als Windows-service onder
`Local System`, start automatisch bij boot, herstart bij crash):

```powershell
$env:BVG_JOIN_TOKEN   = "jt_..."
$env:BVG_BVGEERT_HOST = "https://staging.rozendom.nl"
$env:BVG_TRANSPORT    = "my-connection"   # optional
iwr https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.ps1 -UseBasicParsing | iex
```

Voor klanten op restricted networks die geen rechtstreekse HTTPS naar
bvgeert hebben, set je **beide** envs — direct wordt eerst geprobeerd, en
bij failure (DNS/TCP/HTTP) valt de installer automatisch terug op azure:

```powershell
$env:BVG_JOIN_TOKEN   = "jt_..."
$env:BVG_BVGEERT_HOST = "https://staging.rozendom.nl"
$env:BVG_AZURE_HUB    = "wss://xxx.webpubsub.azure.com/client/hubs/<hub>"
$env:BVG_TRANSPORT    = "my-connection"
iwr https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.ps1 -UseBasicParsing | iex
```

Azure-only (skip direct compleet): laat `BVG_BVGEERT_HOST` weg en zet
alleen `BVG_AZURE_HUB` + `BVG_TRANSPORT` (+ optioneel `BVG_JOIN_TOKEN`
voor auto-pair zonder admin-approve).

De Windows-installer vraagt zelf UAC op als hij niet elevated start. Hij
installeert naar `%ProgramData%\bvg-deamon\`, schrijft `credentials.json`
(alleen leesbaar voor SYSTEM + Administrators), registreert de service en
start hem meteen.

## Gebruik

```bash
# 1. Sluit aan op een transport in bvgeert (direct mode).
bvg-deamon join --host https://staging.rozendom.nl --token jt_... [--transport my-connection]

# 1b. Azure mode (legacy).
bvg-deamon join --hub wss://<endpoint>/client/hubs/<hub> --transport my-transport

# 2. Daemon mode — verbindt en stream messages tot je 'em kill't.
bvg-deamon daemon
# Op Windows: laat dit aan de service-host over (zonder args is daemon-mode).

# 3. Azure-only helpers.
bvg-deamon clients [--online]
bvg-deamon send <client-identifier|*> "hallo daar"

# 4. Loskoppelen (alleen lokale creds wissen).
bvg-deamon unpair
```

### Re-pairen zonder herinstall (Windows)

```powershell
$env:BVG_DEAMON_CREDENTIALS = "$env:ProgramData\bvg-deamon\credentials.json"
& "$env:ProgramData\bvg-deamon\bvg-deamon.exe" join --host https://staging.rozendom.nl --token jt_...
Restart-Service bvg-deamon
```

### Uninstall (Windows)

```powershell
iwr https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/uninstall.ps1 -UseBasicParsing | iex
# of, met behoud van credentials/logs:
&  "$env:ProgramData\bvg-deamon\uninstall.ps1" -KeepFiles
```

Credentials staan in:

- `~/.config/bvg-deamon/credentials.json` (Unix, mode 0600)
- `%LOCALAPPDATA%\bvg-deamon\credentials.json` (Windows interactive)
- `%ProgramData%\bvg-deamon\credentials.json` (Windows service, ACL alleen
  SYSTEM + Administrators)

Logs (Windows-service): `%ProgramData%\bvg-deamon\logs\bvg-deamon-*.log`
(rolling, 10 MB × 5 bestanden).

## Self-update

De installers registreren een **dagelijkse self-update**-job die kijkt of er
een nieuwere `v*`-tag (stable, geen prerelease) is op
[appfabriek/bvg-deamon](https://github.com/appfabriek/bvg-deamon/releases) en
die automatisch installeert. SHA256-validatie tegen de meegeleverde
`.sha256`-asset, automatische rollback naar de vorige versie als de nieuwe
niet start.

| Platform | Mechanisme | Opt-out |
|---|---|---|
| Windows | Scheduled Task `bvg-deamon-update` (daily 03:00-05:00 local + random minute) | `Disable-ScheduledTask -TaskName bvg-deamon-update` |
| Linux   | systemd-user timer `bvg-deamon-update.timer` (daily + `RandomizedDelaySec=1h`) | `systemctl --user disable --now bvg-deamon-update.timer` |
| macOS   | launchd-agent `com.appfabriek.bvg-deamon-update` (daily 03:00-04:59 local) | `launchctl unload ~/Library/LaunchAgents/com.appfabriek.bvg-deamon-update.plist` |

Logs:
- Windows: `%ProgramData%\bvg-deamon\logs\updater.log`
- Linux/macOS: `~/.local/state/bvg-deamon/updater.log`

Force een update-check meteen:
- Windows: `Start-ScheduledTask -TaskName bvg-deamon-update`
- Linux: `systemctl --user start bvg-deamon-update.service`
- macOS: `~/.local/lib/bvg-deamon/bvg-deamon-update.sh --force`

De client-versie zie je via `bvg-deamon --version` of (Windows) in
`%ProgramData%\bvg-deamon\version.txt`.

## Wat is dit precies

Bvgeert is een multi-tenant Rails-app waar verschillende domeinen draaien.
Headless clients (servers, daemons, agents) verbinden zich via deze CLI.
Zie het hoofd-project op `https://github.com/Geert/bvgeert` — daarin staat
het volledige ontwerp van het transportnet.

## Direct-mode protocol (kort)

1. `POST {host}/api/v1/transport/redeem` met body `{ token }`. Respons:
   `{ client_identifier, registration_token, transport_token, websocket_url, connection_identifier }`.
2. WSS naar `{websocket_url}?transport_token={transport_token}` met
   sub-protocol `actioncable-v1-json`.
3. Wacht op `{ "type": "welcome" }`.
4. Stuur `{"command":"subscribe","identifier":"{\"channel\":\"TransportChannel\",\"connection_identifier\":\"<conn>\"}"}`.
5. Wacht op `{ "type": "confirm_subscription" }`.
6. Verwerk inkomende envelopes (`msg.message.sequence`, `message_type`, `payload`).
7. Reconnect met exponential backoff op close/error (1s → 60s).

Zie [`src/cli/direct.ts`](src/cli/direct.ts) (Node) of
[`src/cs/BvgDeamon/Direct/ActionCableWorker.cs`](src/cs/BvgDeamon/Direct/ActionCableWorker.cs)
(Windows).

## Bouwen (alleen voor dev / nieuwe releases)

Node CLI:
```bash
pnpm install         # of: npm install
pnpm build           # → dist/bvg-deamon.js
```

Windows `.exe` (op een box met .NET 10 SDK):
```powershell
dotnet publish src/cs/BvgDeamon/BvgDeamon.csproj `
  -c Release -r win-x64 --self-contained `
  -p:PublishSingleFile=true `
  -p:IncludeNativeLibrariesForSelfExtract=true
# resulteert in: src/cs/BvgDeamon/bin/Release/net10.0/win-x64/publish/bvg-deamon.exe
```

Releases: GitHub Actions publiceert bij iedere `v*`-tag het volgende:
- `dist/bvg-deamon.js` (Node-bundle, voor Unix-installer)
- `bvg-deamon-windows-x64.zip` (bevat `bvg-deamon.exe`, `install.ps1`,
  `uninstall.ps1`, `README.txt` — voor Windows-installer)

## Meer documentatie

| Doc | Voor wie | Wat |
|---|---|---|
| [docs/STATUS.md](docs/STATUS.md) | iedereen | capability matrix per release, live-test bewijzen, deployment-status |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | ontwikkelaars | hoe direct/azure/fallback/self-update werken |
| [docs/OPERATIONS.md](docs/OPERATIONS.md) | operators | install/update/monitor/troubleshoot/uninstall cookbook |
| [CHANGELOG.md](CHANGELOG.md) | iedereen | release-historie met PR-links |
| [CLAUDE.md](CLAUDE.md) | volgende Claude-sessie | handoff-guide |

Server-side (token issuance, broadcast-triggers, multi-tenancy): zie
[`docs/operations/transport-clients.md`](https://github.com/Geert/bvgeert/blob/main/docs/operations/transport-clients.md)
in de bvgeert-repo.

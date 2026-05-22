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

## Volgende sessie / handoff

Zie [`CLAUDE.md`](CLAUDE.md).

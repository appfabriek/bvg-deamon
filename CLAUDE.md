# CLAUDE.md — handoff guide

Voor een Claude-sessie die deze repo opent (lokaal, in CI, of via SSH op een Windows-server zoals rzdm2) en de binary moet bouwen of testen.

## Wat is dit project

`bvg-deamon` is de transport-client voor het BvGeert-netwerk. Hij heeft twee modi in één binary, switch-baar op de credentials:

- **Direct mode** (default, voorkeur) — HTTPS naar `bvgeert` voor eenmalige pairing (`POST /api/v1/transport/redeem`), daarna een doorlopende WSS-verbinding naar `/cable` (Rails ActionCable, sub-protocol `actioncable-v1-json`). Geen Azure tussenstap.
- **Azure mode** (legacy / restricted networks) — pure Azure Web PubSub. Werkt vanaf sites die alleen `wss://*.webpubsub.azure.com:443` uit mogen.

Twee implementaties leveren dezelfde subcommands:
- **Node CLI** (`src/cli/`) — voor macOS / Linux. Bundle naar één `.js` via esbuild.
- **C# CLI** (`src/cs/BvgDeamon/`) — voor Windows. Self-contained single-file `.exe` met .NET 10 runtime erin. Draait als Windows-service (`Microsoft.Extensions.Hosting.WindowsServices`).

Subcommands: `join` (--host/--token voor direct; --hub/--transport voor azure), `daemon`, `clients` (azure-only), `send` (azure-only), `unpair`.

Het server-zijde van pairing + ActionCable leeft in **bvgeert** (https://github.com/Geert/bvgeert): `app/controllers/api/v1/transport/redeem_controller.rb`, `app/channels/transport_channel.rb`, `app/controllers/webhooks/azure_web_pubsub_controller.rb`.

## Wat NIET in deze repo zit

- Server-side code (in bvgeert)
- Azure-provisioning (handmatig via portal door bvgeert-admin)
- Pre-built `.exe` of `.js` totdat er een release is

## Bouwen

### Node bundle (op macOS / Linux dev-box)

```bash
pnpm install        # of: npm install
pnpm build          # esbuild → dist/bvg-deamon.js
```

Resulteert in `dist/bvg-deamon.js` als single-file CommonJS bundle. Te draaien met elke Node ≥ 22 (vereist voor global `WebSocket`).

### Windows .exe (op rzdm2 of een Windows-box met .NET 10 SDK)

```powershell
dotnet publish src/cs/BvgDeamon/BvgDeamon.csproj `
  -c Release -r win-x64 --self-contained `
  -p:PublishSingleFile=true `
  -p:IncludeNativeLibrariesForSelfExtract=true
# resulteert in: src/cs/BvgDeamon/bin/Release/net10.0/win-x64/publish/bvg-deamon.exe
```

De CI (`.github/workflows/release.yml`) doet hetzelfde op tag `v*` en publiceert `bvg-deamon-windows-x64.zip` (met `install.ps1` en `uninstall.ps1` erbij) als release-asset.

## C#-projectstructuur

```
src/cs/BvgDeamon/
  BvgDeamon.csproj             # Sdk.Worker, .NET 10, win-x64 single-file
  Program.cs                   # subcommand-dispatcher + service-host (RunDaemon)
  Credentials.cs               # JSON-shape (direct + azure velden), Mode enum, ACL
  Direct/
    RedeemClient.cs            # HTTPS POST /api/v1/transport/redeem
    DirectJoin.cs              # redeem + save credentials
    ActionCableWorker.cs       # BackgroundService — WSS-loop, reconnect, lifetime-stop bij auth-fail
  Azure/
    AzureJoin.cs               # pairing.code/approved flow
    AzureWorker.cs             # BackgroundService — Azure WebPubSub-client
    AzureCommands.cs           # clients/send/RequireCreds (interactive)
  Logging/
    SerilogSetup.cs            # rolling files (10 MB × 5) onder %ProgramData%\bvg-deamon\logs
```

## Installeren als Windows-service

De volledige installer (`install.ps1`) doet:
1. UAC self-elevate
2. Resolve env-vars `BVG_JOIN_TOKEN`, `BVG_BVGEERT_HOST`, `BVG_TRANSPORT` (of `BVG_AZURE_HUB`)
3. Download `bvg-deamon-windows-x64.zip` van laatste release
4. Pak uit naar `%ProgramData%\bvg-deamon\`
5. Roept `bvg-deamon.exe join` aan om te pairen — credentials worden geschreven met restrictieve ACL (alleen SYSTEM + Administrators)
6. `sc.exe create`, `sc.exe failure` (3×10s restart), `sc.exe start`
7. Persist `BVG_DEAMON_CREDENTIALS` als per-service registry env-var

Re-pair zonder herinstall:
```powershell
$env:BVG_DEAMON_CREDENTIALS = "$env:ProgramData\bvg-deamon\credentials.json"
& "$env:ProgramData\bvg-deamon\bvg-deamon.exe" join --host https://staging.rozendom.nl --token jt_...
Restart-Service bvg-deamon
```

## Het server-zijde verwacht

**Direct mode** (zie bvgeert `app/controllers/api/v1/transport/redeem_controller.rb` en `app/channels/transport_channel.rb`):

| Stap | Wat |
|---|---|
| 1 | `POST /api/v1/transport/redeem` met `{token}` → `{client_identifier, registration_token, transport_token, websocket_url, connection_identifier}` |
| 2 | WSS naar `<websocket_url>?transport_token=<transport_token>` met sub-protocol `actioncable-v1-json` |
| 3 | Server stuurt `{type:"welcome"}` → client stuurt `{command:"subscribe", identifier:"{\"channel\":\"TransportChannel\",\"connection_identifier\":\"<conn>\"}"}` |
| 4 | Server bevestigt met `{type:"confirm_subscription"}` |
| 5 | Berichten arriveren als `{identifier, message: {sequence, message_type, payload}}` |
| 6 | Server-pings `{type:"ping"}` zijn no-op |

**Azure mode** (legacy — zie bvgeert `app/controllers/webhooks/azure_web_pubsub_controller.rb`):

| Event-naam (`ce-type` suffix) | Doel |
|---|---|
| `pairing.request_topic` | Anonieme client zegt op welke transport hij wil joinen. |
| `clients.list` | Authenticated client vraagt members van een topic. |
| `request_refresh_token` | Token bijna verlopen; bvgeert mint een nieuwe als `token.refresh`. |
| `publish` | Bericht versturen. |

## Bekende issues / aandachtspunten

- **Token-expiry (direct mode)**: `transport_token` is een Rails signed-id (~7 dagen geldig). Bij `reject_subscription` stopt de service (via `IHostApplicationLifetime`) zodat de `sc.exe`-restart-policy 'm probeert. Bij blijvende fout moet de operator opnieuw `bvg-deamon join --host ... --token ...` draaien.
- **Token-refresh (azure mode)**: nog niet geïmplementeerd in de C#-versie. Operator moet `unpair` + `join` herhalen als access_url verloopt. Voor stille refresh: `WebPubSubClientCredential(Func<>)` die de credentials uit bestand opnieuw inleest.
- **`--self-contained` produceert een ~77 MB `.exe`** met de .NET 10 runtime ingebakken. Noodzakelijk voor locked-down sites.
- **Logs**: `%ProgramData%\bvg-deamon\logs\bvg-deamon-*.log` (rolling, 10 MB × 5 bestanden). Bij interactive runs (zonder `BVG_DEAMON_CREDENTIALS` onder ProgramData) logt 'ie naast de exe.

## Verifieer met server

Zie [`docs/operations/STAGING.md`](https://github.com/Geert/bvgeert/blob/main/docs/operations/STAGING.md) in de bvgeert-repo voor het live-test stappenplan op staging.rozendom.nl.

Snelle check vanaf de server-kant:
```bash
# Op de bvgeert-host:
bin/rails runner 'Transport::Router.fanout(connection_identifier: "...", message_type: "hello", payload: "ping")'
```
en kijk naar `%ProgramData%\bvg-deamon\logs\bvg-deamon-*.log` op de client.

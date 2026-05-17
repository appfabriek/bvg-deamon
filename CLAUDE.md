# CLAUDE.md — handoff guide

Voor een Claude-sessie die deze repo opent (lokaal, in CI, of via SSH op een Windows-server zoals rzdm2) en de binary moet bouwen of testen.

## Wat is dit project

`bvg-deamon` is de transport-client voor het BvGeert-netwerk. Hij praat **pure-Azure Web PubSub** (geen HTTPS naar bvgeert) zodat hij vanaf restricted sites kan draaien.

Twee implementaties leveren dezelfde functionaliteit:
- **Node CLI** (`src/cli/`) — voor macOS / Linux. Bundle naar één `.js` via esbuild.
- **C# CLI** (`src/cs/BvgDeamon/`) — voor Windows. Self-contained single-file `.exe` met .NET 10 runtime erin.

Beide ondersteunen de subcommands: `join`, `daemon`, `clients`, `send`, `unpair`.

Het server-zijde van de pairing-flow leeft in de **bvgeert** repository (https://github.com/Geert/bvgeert). Zie daar `app/controllers/webhooks/azure_web_pubsub_controller.rb`, `app/models/transport/connection_request.rb`, en `docs/technical/transport.md`.

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

Resulteert in `dist/bvg-deamon.js` als single-file CommonJS bundle. Te draaien met elke Node ≥ 20.

### Windows .exe (op rzdm2 of een Windows-box met .NET 10 SDK)

```powershell
cd src/cs/BvgDeamon
dotnet publish -c Release -r win-x64 --self-contained -p:PublishSingleFile=true
# resulteert in: bin/Release/net10.0/win-x64/publish/bvg-deamon.exe
```

Verplaats de `.exe` naar de root van de repo (of upload als GitHub release asset).

## Wat een rzdm2-sessie moet doen

Stappenplan voor "het project pakken en de binary bouwen":

1. **Clone of pull deze repo:**
   ```powershell
   git clone https://github.com/appfabriek/bvg-deamon.git
   cd bvg-deamon
   ```

2. **Verifieer toolchain:**
   ```powershell
   dotnet --version    # > 10.x verwacht
   ```

3. **Eerste build:**
   ```powershell
   cd src\cs\BvgDeamon
   dotnet restore
   dotnet build
   ```
   Verwachte issues bij eerste build:
   - **`Azure.Messaging.WebPubSub.Client` package versie**: pin op de versie die in `clients/crt2/daemon-dotnet/` werkt — die heeft al productie-mileage.
   - **API-verschillen** tussen onze `Program.cs`-schets en de echte SDK-handlers. De Node-versie (`src/cli/index.ts`) en de PoC `clients/crt2/daemon-dotnet/Worker.cs` in de bvgeert-repo zijn referentie.

4. **Publish self-contained:**
   ```powershell
   dotnet publish -c Release -r win-x64 --self-contained -p:PublishSingleFile=true
   ```

5. **Test lokaal:**
   ```powershell
   bin\Release\net10.0\win-x64\publish\bvg-deamon.exe join --hub wss://wpspoc59618bvgeert.webpubsub.azure.com/client/hubs/<HUB_NAME> --transport e2ee-transport-1
   ```
   Verifieer dat:
   - Anonieme connect lukt
   - Pair-code op stdout komt
   - Na admin-approve een `pairing.approved`-bericht binnenkomt en de credentials lokaal opgeslagen worden

6. **Release:**
   - Commit + push de bijgewerkte `Program.cs`/`.csproj` als er fixes nodig waren.
   - Maak een GitHub-release tag (`v0.1.0`) en upload `bvg-deamon.exe` + `dist/bvg-deamon.js` als assets.
   - De installers (`install.sh` / `install.ps1`) downloaden van `https://github.com/appfabriek/bvg-deamon/releases/latest/download/...`.

## Het server-zijde verwacht

Volgens de bvgeert-implementatie ([`app/controllers/webhooks/azure_web_pubsub_controller.rb`](https://github.com/Geert/bvgeert/blob/main/app/controllers/webhooks/azure_web_pubsub_controller.rb)) snapt de webhook deze user-events:

| Event-naam (`ce-type` suffix) | Doel |
|---|---|
| `pairing.request_topic` | Anonieme client zegt op welke transport hij wil joinen. Payload: `{"topic_identifier": "..."}`. |
| `clients.list` | Authenticated client vraagt om de members van een topic. Payload: `{"topic_identifier": "..."}`. Antwoord komt als `clients.list_result` system-message. |
| `request_refresh_token` | Token bijna verlopen; bvgeert mint een nieuwe en stuurt 'em als `token.refresh` system-message. |
| `publish` | Bericht versturen. Payload: `{"topic_identifier","message_type","payload","target_identifier"}`. |

System-messages die bvgeert stuurt:

| `type`-veld | Inhoud |
|---|---|
| `pairing.code` | `code`, `expires_at`, `admin_url` |
| `pairing.approved` | `client_id`, `registration_token`, `url`, `expires_at` |
| `pairing.denied` | (geen extra velden) |
| `token.refresh` | `url`, `expires_at` |
| `clients.list_result` | `topic_identifier`, `clients: [{identifier, name?, kind, online}]` |

Reguliere envelopes op een topic worden gebroadcast als `group-message` met velden `topic_id`, `topic_identifier`, `sequence`, `sender_identifier`, `target_identifier`, `message_type`, `payload`, etc.

## Bekende issues / aandachtspunten

- De `Program.cs` is **een schets**: API-namen van de Azure SDK kunnen afwijken (`WebPubSubClient.SendEventAsync` signature, `Connected`/`Disconnected` event-signatures). De rzdm2-sessie moet ze laten compileren tegen de daadwerkelijke `Azure.Messaging.WebPubSub.Client` v1.0 (of nieuwer).
- Voor token-refresh in C#: implementeer een achtergrond-task die `expires_at` watches en sendsEvent `request_refresh_token` rond 5 min voor expiry. De Node-implementatie doet dit lazy in `getClientAccessUrl`-callback; in C# is dat met `WebPubSubClientCredential(Func<>)` ook mogelijk maar je moet zelf de URL bijhouden in een variabele die de credential-functor leest.
- Het Node-bundle gebruikt `picocolors` voor kleuren; in C# kan dat met ANSI-codes als nodig (niet kritiek).
- `--self-contained` produceert een ~60-80 MB `.exe` met de .NET runtime ingebakken. Dat is noodzakelijk voor het locked-down site-uitgangspunt.

## Verifieer met server

De bvgeert-server moet draaien en Azure-config hebben:
1. Op de Azure-hub: `anonymousConnectPolicy: "allow"`.
2. Event handler-URL in Azure: `https://<bvgeert>/webhooks/azure_web_pubsub/<domain-hostname>`.
3. In bvgeert: een transport (topic) aangemaakt via `/admin/transport/topics/new`.

Vraag de bvgeert-admin om de hub-URL en topic-identifier. Test dan met `bvg-deamon join`.

## Workflows / CI

Er is nog **geen** GitHub Actions workflow voor automatische release-builds. Als je dat toevoegt:

```yaml
# .github/workflows/release.yml — schets
name: Release
on:
  push:
    tags: ["v*"]
jobs:
  node:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm run build
      - uses: softprops/action-gh-release@v1
        with:
          files: dist/bvg-deamon.js
  windows:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-dotnet@v4
        with: { dotnet-version: '10.x' }
      - run: dotnet publish src/cs/BvgDeamon -c Release -r win-x64 --self-contained -p:PublishSingleFile=true
      - uses: softprops/action-gh-release@v1
        with:
          files: src/cs/BvgDeamon/bin/Release/net10.0/win-x64/publish/bvg-deamon.exe
```

Tot dat werkt: handmatig builden + uploaden via `gh release create`.

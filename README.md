# bvg-deamon

Transport-client voor het BvGeert-netwerk. Praat pure-Azure (Web PubSub) zodat hij ook draait vanaf sites die alleen `wss://*.webpubsub.azure.com:443` uit mogen.

## Install — single line

**macOS / Linux:**
```bash
curl -fsSL https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.sh | bash
```

**Windows:**
```powershell
iwr https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.ps1 -UseBasicParsing | iex
```

Geen extra config nodig. De installer downloadt Node (Unix) of de zelfstandige `.exe` (Windows), zet `bvg-deamon` in je PATH.

## Gebruik

```bash
# 1. Sluit aan op een transport in bvgeert.
bvg-deamon join --hub wss://<endpoint>/client/hubs/<hub> --transport e2ee-transport-1
# → toont een pair-code; bvgeert-admin keurt 'em goed in
#   /admin/transport/topics/<id> (veld "Approve pair code")

# 2. Daemon mode (interactief).
bvg-deamon daemon
# → ontvangt berichten, type 'reply <text>' om de laatste afzender terug te schrijven
#   of 'send <client-identifier|*> <text>'

# 3. Online clients op de transport.
bvg-deamon clients
bvg-deamon clients --online

# 4. Direct bericht.
bvg-deamon send <client-identifier|*> "hallo daar"

# 5. Loskoppelen (alleen lokale creds wissen).
bvg-deamon unpair
```

Credentials staan in `~/.config/bvg-deamon/credentials.json` (Unix) of `%LOCALAPPDATA%\bvg-deamon\` (Windows), mode 0600.

## Wat is dit precies

Bvgeert is een multi-tenant Rails-app waar verschillende domeinen draaien. Elk domein kan een Azure Web PubSub-resource koppelen, en headless clients (servers, daemons, agents) verbinden zich daar via deze CLI. Zie het hoofd-project op
`https://github.com/Geert/bvgeert` — daarin staat het volledige ontwerp van het transportnet.

## Vereisten in Azure (door bvgeert-admin)

Voor een nieuwe transport:
1. Op de Azure Web PubSub-hub: `anonymousConnectPolicy: "allow"` (anders kan `bvg-deamon join` niet anoniem connecten).
2. Event handler-URL: `https://<bvgeert>/webhooks/azure_web_pubsub/<domain-hostname>` met sys- en user-events.
3. In bvgeert-admin: `/admin/domains/:id/edit` → vul Azure-config in.
4. In bvgeert-admin: `/admin/transport/topics/new` → maak een transport.

## Architectuur op één pagina

```
crt2-CLI         Azure Web PubSub          bvgeert
   │                    │                      │
   │ ws anonymous       │                      │
   │ ──────────────────>│ sys.connect ────────>│
   │                    │ sys.connected ──────>│ ConnectionRequest aanmaken
   │ <───── pair.code ──│                      │ + sturen via send_to_connection
   │ "join transport X" │                      │
   │ ──────────────────>│ user.pairing.req ──>│ ConnectionRequest.target_topic
   │ ... wait ...       │                      │
   │                    │                      │ admin approve via /admin/...
   │                    │                      │ ConnectionRequest#approve!
   │ <── pair.approved ─│ ── send_to_conn ────│   (client_id, token, fresh azure-url)
   │ reconnect          │                      │
   │ ──────────────────>│ sys.connected ──────>│ Transport::Connection record
   │                    │                      │
   │ user.publish ──────>│ ────────────────────>│ Transport::Message + fanout
   │ user.clients.list ─>│ ────────────────────>│ → send_to_conn clients.list_result
   │ user.req_refresh ──>│ ────────────────────>│ → send_to_conn token.refresh
```

## Bouwen (alleen voor dev / nieuwe releases)

Node CLI:
```bash
pnpm install         # of: npm install
pnpm build           # → dist/bvg-deamon.js
```

Windows `.exe` (op een box met .NET 10 SDK):
```powershell
cd src/cs/BvgDeamon
dotnet publish -c Release -r win-x64 --self-contained -p:PublishSingleFile=true
# resulteert in: src/cs/BvgDeamon/bin/Release/net10.0/win-x64/publish/bvg-deamon.exe
```

Releases: GitHub Actions publiceert bij iedere tag de `bvg-deamon.js` en `bvg-deamon.exe` als release assets. De installers downloaden die.

## Volgende sessie / handoff

Zie [`CLAUDE.md`](CLAUDE.md) als je in een nieuwe Claude-sessie (bijvoorbeeld op rzdm2) verder wil bouwen — daar staat hoe je de Windows-binary maakt.

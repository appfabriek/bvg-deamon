# bvg-deamon — architecture

Hoe de twee routes werken, hoe de mode-switch zit, en hoe self-update intern
loopt. Voor de happy-path "wat moet ik installeren": zie [OPERATIONS.md](OPERATIONS.md).

## Twee modes in één binary

```
┌────────────────────────────────────────────────────────────────┐
│  bvg-deamon (single binary — exe op Windows, .js bundle op Unix)│
│                                                                  │
│  ┌──────────────┐                       ┌───────────────────┐   │
│  │ Direct mode  │                       │   Azure mode      │   │
│  │              │                       │                   │   │
│  │ HTTPS redeem │   credentials.json    │ anonymous WSS     │   │
│  │     ↓        │   determines mode:    │  + redeem_token   │   │
│  │ ActionCable  │   bvgeert_host →      │  → pairing.       │   │
│  │ WSS to /cable│   direct              │      approved     │   │
│  │              │   azure_hub_url →     │     ↓             │   │
│  │              │   azure               │ Azure WPS group   │   │
│  └──────────────┘                       │  + send_to_user   │   │
│                                         └───────────────────┘   │
└────────────────────────────────────────────────────────────────┘
```

`Credentials.Mode` (C#) en `credentialsMode()` (Node) leiden de modus af uit
welke velden gezet zijn in `credentials.json`:

| Veld gezet | Mode | Wie kiest? |
|---|---|---|
| `bvgeert_host` | direct | `bvg-deamon join --host <h> --token <jt>` |
| `azure_hub_url` | azure | `bvg-deamon join --hub <wss> --transport <t> [--token <jt>]` |

Eén exe, twee BackgroundService-implementaties (`Direct/ActionCableWorker.cs`
en `Azure/AzureWorker.cs`). De Generic Host kiest op `Mode`.

## Direct mode flow

```
┌──────────┐                              ┌──────────────┐
│ client   │                              │   bvgeert    │
│          │                              │              │
│  1. POST /api/v1/transport/redeem        │              │
│     body: {token: "jt_..."}              │              │
│  ───────────────────────────────────────►│              │
│                                          │ JoinToken.   │
│                                          │  redeem!     │
│  ◄───────────────────────────────────────│ → Client+   │
│  201 {client_identifier, transport_token,│   Membership│
│        websocket_url, connection_id}     │              │
│                                          │              │
│  2. WSS {websocket_url}?transport_token  │              │
│     sub-protocol actioncable-v1-json     │              │
│  ───────────────────────────────────────►│ ApplicationCable
│  ◄───────────────────────────────────────│ verifies     │
│  {type:"welcome"}                        │ signed-id    │
│                                          │              │
│  3. {command:"subscribe",                │              │
│      identifier:{TransportChannel,       │              │
│                  connection_identifier}} │              │
│  ───────────────────────────────────────►│ TransportChan│
│  ◄───────────────────────────────────────│ subscribed   │
│  {type:"confirm_subscription"}           │              │
│                                          │              │
│  ┄┄┄┄┄ live broadcasts ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │              │
│  ◄───────────────────────────────────────│ Transport::  │
│  {identifier, message: {sequence,        │  Router.     │
│     message_type, payload}}              │  fanout      │
└──────────┘                              └──────────────┘
```

Reconnect: exponential backoff 1s → 60s. Backoff reset alleen na succesvolle
`confirm_subscription` (anders hamert de daemon de server bij elke pre-subscribe
disconnect).

`reject_subscription` (verlopen `transport_token`) → daemon stopt zichzelf via
`IHostApplicationLifetime.StopApplication()`. Windows `sc.exe failure`-policy
probeert het opnieuw; bij blijvende fail moet operator een nieuwe `--token`
draaien via `bvg-deamon join`.

## Azure mode flow

```
┌──────────┐                ┌────────────────┐         ┌──────────┐
│ client   │                │ Azure WebPubSub │         │  bvgeert │
│          │                │  hub e2e_test   │         │          │
│ 1. WSS (anonymous,        │                 │         │          │
│    no userId)             │                 │         │          │
│ ──────────────────────────►│ sys.connect     │         │          │
│                           │ webhook ───────►│ assign  │          │
│ ◄──────────────────────────│                 │ anon-id │          │
│ {connected: "anon-xxx"}    │                 │         │          │
│                           │                 │         │          │
│ 2. send_event              │                 │         │          │
│    "redeem_join_token"     │                 │         │          │
│    {token, topic_id}       │                 │         │          │
│ ──────────────────────────►│ user.event ────►│ JoinToken│         │
│                           │                 │ .redeem! │         │
│                           │ ◄─send_to_conn──│ +client  │         │
│ ◄──────────────────────────│ pairing.        │ +token   │         │
│ {type:"pairing.approved",  │  approved       │          │         │
│  client_id, url, expires}  │                 │          │         │
│                           │                 │          │         │
│ 3. reconnect with new      │                 │          │         │
│    access_url (JWT, roles  │                 │          │         │
│    sendToUser+joinLeave)   │                 │          │         │
│ ──────────────────────────►│ sys.connect ────►│ create   │         │
│ {connected, userId=cl_...} │ + sys.connected │ endpoint │         │
│                           │                 │ kind=    │         │
│                           │                 │ azure_*  │         │
│                           │                 │          │         │
│ ┄┄┄┄┄ live ┄┄┄┄┄┄┄┄┄┄┄    │                 │          │         │
│ ◄──────────────────────────│ send_to_user ───│ Transport│         │
│ envelope                   │                 │ ::Router │         │
│                           │                 │ ::Adapters         │
│                           │                 │ ::AzureWPS         │
└──────────┘                └────────────────┘ └──────────┘
```

Met `--token`: skip de pair-code-dance (geen `pairing_request_topic`, geen
admin-approve in UI). De server-side webhook handler `handle_redeem_join_token`
maakt direct een `Transport::Client`, mint een 1-uur access-URL, en stuurt
`pairing.approved` terug via Azure.

Refresh: in azure-mode is `access_url` 1 uur geldig. Re-pair vereist nu nog
handmatige `bvg-deamon join`. Een refresh-flow (`request_refresh_token` event)
bestaat al in de Node-implementatie maar is nog niet ge-port naar C# — niet
kritisch want de service-restart-policy zou bij expiry automatisch een
verbinding opnieuw proberen.

## Auto-fallback: direct → azure

```
              ┌────────────────────┐
              │ install.ps1 / .sh  │
              │ CmdJoin            │
              └─────────┬──────────┘
                        │
       BVG_BVGEERT_HOST  set?
                        │
        ┌───────────────┴───────────────┐
        ▼ yes                        no ▼
  try DirectJoin                  azure-only
    │                                  │
    success? ──── yes ──► done         ▼
    │                              AzureJoin
    no                                  │
    │                              with token?
    BVG_AZURE_HUB set?            ┌───┴───┐
    │                          yes▼       no▼
   yes                       skip-     admin-
    ▼                        pair-     approve
  AzureJoin                  code      flow
    │
    (with token if set)
    │
    done / fail
```

De fallback is **alleen op exit-code** van `bvg-deamon.exe join` — er is geen
pre-flight connectivity-check tussen de twee. Een direct-join faalt bij DNS-
failure, TCP-block, HTTP-error, of een ongeldige token. Bij elk van die fail-
condities en gegeven `BVG_AZURE_HUB`, probeert de installer de azure-route met
hetzelfde token.

## Self-update

```
┌─────────────────────────────────────────────────────────────┐
│ OS-native scheduler (daily, random minute in 03:00-05:00)  │
│  Win: Scheduled Task `bvg-deamon-update`                   │
│  Linux: systemd-user timer `bvg-deamon-update.timer`       │
│  macOS: launchd `com.appfabriek.bvg-deamon-update`         │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
            scripts/bvg-deamon-update.{ps1,sh}
                           │
   ┌───────────────────────┼───────────────────────┐
   ▼                       ▼                       ▼
GitHub API           SHA256 verify           Service swap
GET /releases   →    download .zip   →   stop → rename →
filter !prerelease   compare with        copy new exe →
+ first()           release .sha256      start → verify
   │                      │                       │
   │                      │              ─── happy:  ─►
   │                      │                  log + exit 0
   │                      │
   │                      │              ─── new exe
   │                      │                  doesn't start:
   │                      │                  rename .previous
   │                      │                  back → start → log
   │                      │
no update          mismatch:                rollback fails:
log + exit 0       log + abort              log "manual intervention
                                            required" + alert
```

Versie-detectie: `version.txt` naast de exe (gestamped door release-workflow)
of fallback `bvg-deamon --version` (leest `AssemblyInformationalVersion`).

Stable-only filter: `release.prerelease=false AND release.draft=false`.

Rollback-strategie: voor de exe-swap wordt de huidige `bvg-deamon.exe`
hernoemd naar `.previous`. Als de nieuwe niet start, doet de updater de
omgekeerde rename en herstart de service met de oude versie. Beide rename
ops zijn NTFS-atomic op dezelfde volume — geen tussentijdse "geen exe"-staat.

## File-layout (Windows-service)

```
%ProgramData%\bvg-deamon\
├── bvg-deamon.exe              # 77 MB self-contained .NET 10 binary
├── bvg-deamon.exe.previous     # only present right after a successful update
├── credentials.json            # ACL: SYSTEM full + Administrators read
├── version.txt                 # current version string (e.g. "0.4.1")
├── install.ps1                 # bundled in zip, ran once at install
├── uninstall.ps1               # bundled in zip
├── bvg-deamon-update.ps1       # bundled in zip, ran by Scheduled Task
├── README.txt                  # bundled in zip
└── logs\
    ├── bvg-deamon-YYYYMMDD.log # daemon logs, rolling 10 MB × 5
    └── updater.log             # updater logs, append-only
```

Per-service registry env-var `BVG_DEAMON_CREDENTIALS` wijst de service-context
naar `%ProgramData%\bvg-deamon\credentials.json` (anders zou `LOCALAPPDATA`-
default voor `LocalSystem` `C:\Windows\System32\config\systemprofile\...` zijn).

## File-layout (Unix)

```
/usr/local/bin/bvg-deamon              # wrapper shell-script
/usr/local/lib/bvg-deamon/
├── bvg-deamon.js                       # Node bundle
├── bvg-deamon.js.previous              # post-update fallback
├── bvg-deamon-update.sh                # updater
├── version.txt                         # version stamp
└── node-v22.11.0/bin/node              # only if system Node was missing

~/.config/bvg-deamon/
└── credentials.json                    # mode 0600

~/.local/state/bvg-deamon/
└── updater.log

~/.config/systemd/user/
├── bvg-deamon.service
├── bvg-deamon-update.service
└── bvg-deamon-update.timer
```

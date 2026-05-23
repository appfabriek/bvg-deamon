# bvg-deamon — status

Snapshot van wat de client kan, welke versies live zijn, en wat live getest is.
Laatste update bij release v0.4.1 (2026-05-22).

## Release-progressie

```mermaid
timeline
    title bvg-deamon release-historie
    2026-05-22 : v0.3.0 : Windows-service + direct mode (HTTPS+WSS ActionCable)
               : v0.3.1 : redeem_join_token in C# AzureJoin + auto-fallback direct→azure
               : v0.3.2 : ACL-hotfix (standalone paths)
               : v0.4.0 : Pre-flight checks + daily self-update (Win/Linux/macOS)
               : v0.4.1 : Updater SHA256-decode hotfix
```

## Wat de client doet

`bvg-deamon` is de **transport-client voor het BvGeert-netwerk** — een headless
daemon die op een server, dev-box of klant-machine draait en zich abonneert op
één of meer connections (transports). Hij ontvangt envelopes (`message_type`,
`payload`) van bvgeert en kan ze (in azure-mode) ook terug-sturen.

| Aspect | Detail |
|---|---|
| Platforms | Windows 10+ (x64), Linux (x64/aarch64), macOS (arm64/x64) |
| Windows | self-contained `.NET 10` exe (~77 MB), draait als `Local System` service |
| Linux   | Node bundle ≥ 22, draait via `systemd --user` |
| macOS   | Node bundle ≥ 22, draait via `launchd` LaunchAgent |
| Install | één-regel curl/iwr commando — UAC self-elevate op Windows |
| Routes  | direct (HTTPS + ActionCable WSS) of azure (Azure WebPubSub) — switch op credentials |
| Auto-update | daily via OS-native scheduler met SHA256-verificatie en automatische rollback |
| Auto-fallback | direct → azure bij failure als operator beide envs zet |

## Capabilities per release

| Versie | Wat erbij kwam | Releases |
|---|---|---|
| **v0.3.0** | Windows-service + direct-mode (HTTPS-redeem + ActionCable WSS), single-file exe, installer + uninstaller | [link](https://github.com/appfabriek/bvg-deamon/releases/tag/v0.3.0) |
| **v0.3.1** | `redeem_join_token` in C# Azure-join (parity met Node — server-side auto-pair, skip admin approve). Auto-fallback direct → azure in CmdJoin + install.ps1. | [link](https://github.com/appfabriek/bvg-deamon/releases/tag/v0.3.1) |
| **v0.3.2** | Hotfix: ACL-lockdown alleen op `%ProgramData%`-pad. Eerder werd ook standalone `%LOCALAPPDATA%` credentials.json gelockt → eigen daemon kon 'em niet meer lezen niet-elevated. | [link](https://github.com/appfabriek/bvg-deamon/releases/tag/v0.3.2) |
| **v0.4.0** | Pre-flight checks (OS, disk, internet) en **daily self-update** via Scheduled Task (Win) / systemd-timer (Linux) / launchd-agent (macOS). Stable-only filter, SHA256-verificatie, automatische rollback bij fail-to-start. | [link](https://github.com/appfabriek/bvg-deamon/releases/tag/v0.4.0) |
| **v0.4.1** | Hotfix: updater decodeerde `.sha256` response-body niet (GitHub stuurt `Byte[]`, `.Trim()` throwde). Gevangen door dry-run vóór een klant 'em raakte. | [link](https://github.com/appfabriek/bvg-deamon/releases/tag/v0.4.1) |

## Live-test bewijzen (op rzdm2 + staging.rozendom.nl)

| Wat | Bewijs |
|---|---|
| Direct route end-to-end | `[#3](https://github.com/appfabriek/bvg-deamon/pull/3)` — service registered as Local System, `sc.exe query` toont `STATE RUNNING`, `Transport::Router.fanout` broadcasts `#3 windows-test` en `#4 live-test.ping` ontvangen ~1s na publish in `%ProgramData%\bvg-deamon\logs\bvg-deamon-*.log` |
| Azure route end-to-end (token-redeem) | `[#4](https://github.com/appfabriek/bvg-deamon/pull/4)` — `bvg-deamon.exe join --hub wss://...azure.com/.../e2e_test --token jt_...` paired client `cl_f1f3b215...`, daemon stdout: `connected — connectionId=... userId=cl_...`, broadcasts `azure-route-test` en `azure-route-test.ping2` (seq=5, seq=6) ontvangen ~1s na publish |
| Self-update detect+download+verify+swap+rollback | `[#6](https://github.com/appfabriek/bvg-deamon/pull/6)` — standalone dry-run tegen v0.4.1 release-zip: log toont `latest stable: 0.4.1`, `update available: 0.0.1 -> 0.4.1`, `sha256 verified (0fcba87663...)`, swap, failed-start (fake service), rollback-trigger met "manual intervention required" log |

## Nog niet end-to-end getest (geen show-stoppers)

| Wat | Waarom uitgesteld | Risico |
|---|---|---|
| Happy-path self-update op echte service | Vereist één UAC om de huidige rzdm2-service van v0.3.0 → v0.4.x te brengen; eerstvolgende Scheduled-Task-run om 03:00-05:00 doet het vanzelf | Laag — alle voorbereidende paden bewezen, alleen Windows `Start-Service` op echte service is niet getriggerd |
| Auto-fallback in failure-scenario | Beide individuele paths (direct en azure) zijn bewezen werkend; de switch zelf is logica zonder externe afhankelijkheden | Laag |
| Linux / macOS install + update flow | Geen test-machine actief in de sessie waar dit werd gebouwd | Middel — code geschreven met dezelfde patronen als Node-installer + Windows-updater die wel getest zijn |

## Deployment-status op klanten

| Machine | Versie | Modus | Notes |
|---|---|---|---|
| `rzdm2` | `v0.3.0` (service) | direct | Geïnstalleerd voor PR #3 live-test, draait stabiel. **Update task ontbreekt nog** — installer rerunnen om naar v0.4.x te brengen |
| `rzdm6-linux-test` connection | n/a | n/a | Connection bestaat op staging, geen client op draaien |

## Verwante docs

- [ARCHITECTURE.md](ARCHITECTURE.md) — hoe direct/azure/fallback/self-update onder de motorkap werken
- [OPERATIONS.md](OPERATIONS.md) — install, update, troubleshoot, uninstall
- [CHANGELOG.md](../CHANGELOG.md) — release-historie met commit-links
- [CLAUDE.md](../CLAUDE.md) — handoff-guide voor nieuwe Claude-sessies

Server-side perspectief (token issuance, connection-beheer, broadcast-triggers)
staat in de **bvgeert** repo: `docs/operations/transport-clients.md`.

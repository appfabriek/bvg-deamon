# Changelog

All notable changes per release. See [docs/STATUS.md](docs/STATUS.md) for a
capability matrix and live-test evidence.

## [v0.4.7] - 2026-05-24

### Fixed
- Windows `install.ps1` failed on re-install with `Access to the path
  'C:\ProgramData\bvg-deamon\credentials.json' is denied`. Previous install
  hardens the file's ACL to `SYSTEM:F + Administrators:R`, so `bvg-deamon.exe
  join` can't overwrite it. Admins can still delete via the directory ACL —
  installer now removes the stale file before re-pairing.

PR: [#15](https://github.com/appfabriek/bvg-deamon/pull/15)

## [v0.4.6] - 2026-05-24

### Fixed
- Windows `install.ps1` crashed on the disk-space pre-flight with `Get-Item :
  Could not find item C:\ProgramData` on Win11 build 26200 — a directory-junction
  quirk where `Get-Item` (without `-LiteralPath -Force`) interprets the path as
  a glob and fails to resolve. Switched to `[System.IO.DriveInfo]::new()`, which
  bypasses the path provider entirely.

PR: [#14](https://github.com/appfabriek/bvg-deamon/pull/14)

## [v0.4.5] - 2026-05-24

### Fixed
- Updater silently exited after `local version: …` log line. `awk … exit`
  closes its stdin, so `tr` and `curl` upstream receive SIGPIPE. With
  `set -o pipefail`, the script trapped and `set -e` killed it — no error log,
  no rollback, no progress. v0.4.4 only addressed `head -1`; awk's own `exit`
  triggers the same trap. Added `|| true` on the two affected pipes; the
  existing empty-checks remain the real error handlers.
- The `bvg-deamon --version` verification pipe (`… | head -1 | tr -d`) had
  the same race — pipefail trip set `ACTUAL_VER` to empty even when the value
  came through, causing unnecessary rollbacks.

PR: [#13](https://github.com/appfabriek/bvg-deamon/pull/13)

## [v0.4.4] - 2026-05-24

### Fixed
- Updater pipeline `… | tr | awk | head -1` triggered SIGPIPE upstream when
  `head -1` closed its stdin after the first line. With `set -o pipefail` the
  script trapped intermittently — sometimes upgrades worked, sometimes the
  script exited after the first log line. Dropped `head -1`; awk already does
  `print; exit` so emits exactly one line.

PR: [#12](https://github.com/appfabriek/bvg-deamon/pull/12)

## [v0.4.3] - 2026-05-24

### Fixed
- Existing installs stayed stuck on a buggy updater script forever — there
  was no mechanism to refresh the updater itself. Updater now downloads the
  latest version of itself from `releases/latest/download/bvg-deamon-update.sh`,
  compares sha256, and re-execs with `BVG_UPDATER_REFRESHED=1` as a loop guard
  if it changed. Self-healing.

PR: [#11](https://github.com/appfabriek/bvg-deamon/pull/11)

## [v0.4.2] - 2026-05-24

### Fixed
- Node bundle (Linux/macOS) had no `--version` flag, so the updater's
  post-swap verification (`bvg-deamon --version`) returned `'empty'` and
  triggered an always-on rollback path. Any real upgrade would have rolled
  back. `scripts/build-node.mjs` now passes `package.json` version through
  `esbuild --define BVG_VERSION`; CLI accepts `--version`, `-v`, `version`.
- `ver_lt 0.4.1 0.4.1` returned true. `sort -V -C` considers an "equal" list
  as "sorted", so equal versions appeared as "less than". Result: the daily
  updater retried the same version every run — download, swap, rollback.
  Added equality-guard before the sort.

PR: [#10](https://github.com/appfabriek/bvg-deamon/pull/10)

## [v0.4.1] - 2026-05-22

### Fixed
- Updater could not parse the `.sha256` release-asset response: GitHub returned
  `Byte[]` Content for raw release-assets, and `[byte[]].Trim()` throws. Every
  update attempt was aborted at the checksum-verification step. Caught by the
  v0.4.0 standalone dry-run before any client hit it.

PR: [#7](https://github.com/appfabriek/bvg-deamon/pull/7)

## [v0.4.0] - 2026-05-22

### Added
- **Pre-flight checks** in both installers:
  - Windows: OS ≥ 10, ≥ 200 MB free on `%ProgramData%`, github.com:443 reachable warn-only
  - Linux/macOS: ≥ 250 MB free in `$HOME`, github.com reachable warn-only
- **Daily self-update** via OS-native schedulers:
  - Windows: `Scheduled Task bvg-deamon-update` (random minute in 03:00-05:00 local)
  - Linux: `systemd-user timer` (`OnUnitActiveSec=1d`, `RandomizedDelaySec=1h`)
  - macOS: `launchd-agent com.appfabriek.bvg-deamon-update` (random minute 03:00-04:59)
- **Update flow**: GitHub Releases API → stable-only filter → SHA256-verified
  download → atomic exe swap → service-restart → automatic rollback to
  `.previous` on start-failure.
- `bvg-deamon --version` / `-v` / `version` subcommand reads
  `AssemblyInformationalVersion`.
- Release workflow now also publishes the Node bundle (`bvg-deamon.js`), its
  `.sha256`, a `version.txt`, and `bvg-deamon-update.sh` — required by the
  Unix installer/updater.
- `.gitattributes` forces LF on `.sh` files so they remain executable after a
  Windows checkout.

### Changed
- `dotnet publish -p:Version=<tag>` bakes the release version into the Windows
  exe; `--version` output matches the GitHub tag.
- Release zip ships its own `bvg-deamon-windows-x64.zip.sha256` for download
  verification.

PR: [#6](https://github.com/appfabriek/bvg-deamon/pull/6)

## [v0.3.2] - 2026-05-22

### Fixed
- `Credentials.TryLockDown()` now skips the ACL hardening for credentials paths
  that are not under `%ProgramData%`. Earlier the strict ACL (SYSTEM full +
  Administrators read, no inheritance) was applied to every credentials file
  — including standalone paths under `%LOCALAPPDATA%` or a custom
  `BVG_DEAMON_CREDENTIALS`. That stripped the owner's implicit rights, so a
  non-elevated `bvg-deamon.exe daemon` could not read its own credentials.json
  after `bvg-deamon.exe join`. Production-service path (`%ProgramData%`) still
  gets the hardened ACL.

PR: [#5](https://github.com/appfabriek/bvg-deamon/pull/5)

## [v0.3.1] - 2026-05-22

### Added
- **C# AzureJoin now supports `--token`** via the `redeem_join_token` event
  on `Connected` — parity with `src/cli/index.ts:121`. Server-side
  auto-approves; no admin click in the UI needed.
- **Auto-fallback direct → azure** in `Program.cs CmdJoin` and `install.ps1`:
  when both `BVG_BVGEERT_HOST` and `BVG_AZURE_HUB` are set, the installer
  tries direct first and falls back to azure on a non-zero exit. The same
  join-token is forwarded to the azure branch (which was missing).
- README updated with the dual-env install snippet.

PR: [#4](https://github.com/appfabriek/bvg-deamon/pull/4)

## [v0.3.0] - 2026-05-22

### Added
- **Windows transport-client** as a `.NET 10` Worker-service variant of
  `bvg-deamon`, identical behavior to the Linux/macOS Node-CLI but native:
  - `src/cs/BvgDeamon/` restructured into `Direct/`, `Azure/`, `Logging/`.
  - Mode-switch on credentials (`bvgeert_host` → direct, `azure_hub_url` →
    azure), same pattern as `src/cli/credentials.ts`.
  - `ActionCableWorker` does the `welcome` → `subscribe` →
    `confirm_subscription` flow with exponential backoff (1s → 60s), reset
    only after confirm, and stops the host
    (`IHostApplicationLifetime.StopApplication()`) on `reject_subscription`
    so the `sc.exe`-restart-policy decides what to do.
  - `Credentials.Save()` applies a restrictive ACL on Windows
    (SYSTEM full + Administrators read).
- `install.ps1` — UAC self-elevate, download release zip to `%ProgramData%`,
  redeem join-token, `sc.exe create/failure/start`, per-service registry
  env-var `BVG_DEAMON_CREDENTIALS`.
- `uninstall.ps1` — stop, delete, (default) rm install dir; `-KeepFiles`
  preserves credentials and logs.
- `.github/workflows/release.yml` — tag `v*` triggers `dotnet publish`
  (single-file, self-contained, win-x64), zip with exe + install.ps1 +
  uninstall.ps1 + README.txt as `bvg-deamon-windows-x64.zip` release asset.

### Changed
- README.md describes the two modes and the Windows install/re-pair/uninstall
  flow.

PR: [#3](https://github.com/appfabriek/bvg-deamon/pull/3)

---

Previous releases (v0.1.x, v0.2.0) were Azure-only Node CLI; see git history.

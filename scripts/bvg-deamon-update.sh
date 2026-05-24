#!/usr/bin/env bash
# Self-updater for bvg-deamon (macOS launchd + Linux systemd-user).
#
# - Checks GitHub Releases API for the latest stable (non-prerelease) tag.
# - Compares with $LIB_DIR/version.txt (or empty if absent).
# - If newer: downloads bvg-deamon.js + .sha256, verifies, swaps, restarts service.
# - Logs to $XDG_STATE_HOME/bvg-deamon/updater.log (or ~/.local/state/...).
#
# Opt-out:
#   Linux:   systemctl --user disable --now bvg-deamon-update.timer
#   macOS:   launchctl unload ~/Library/LaunchAgents/com.appfabriek.bvg-deamon-update.plist

set -euo pipefail

REPO="${BVG_REPO:-appfabriek/bvg-deamon}"
INSTALL_PREFIX="${BVG_DEAMON_PREFIX:-/usr/local}"
if [ ! -w "$INSTALL_PREFIX/bin" ] && [ "$INSTALL_PREFIX" = "/usr/local" ]; then
  INSTALL_PREFIX="$HOME/.local"
fi
BIN_DIR="$INSTALL_PREFIX/bin"
LIB_DIR="$INSTALL_PREFIX/lib/bvg-deamon"
BUNDLE_PATH="$LIB_DIR/bvg-deamon.js"
VERSION_FILE="$LIB_DIR/version.txt"

STATE_DIR="${XDG_STATE_HOME:-$HOME/.local/state}/bvg-deamon"
LOG_FILE="$STATE_DIR/updater.log"
mkdir -p "$STATE_DIR"

log() {
  local lvl="$1"; shift
  local ts; ts="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  printf '%s [%s] %s\n' "$ts" "$lvl" "$*" | tee -a "$LOG_FILE"
}

restart_service() {
  case "$(uname -s)" in
    Linux)
      if command -v systemctl >/dev/null 2>&1; then
        systemctl --user restart bvg-deamon.service 2>&1 | tee -a "$LOG_FILE" || true
      fi
      ;;
    Darwin)
      local plist="$HOME/Library/LaunchAgents/com.appfabriek.bvg-deamon.plist"
      if [ -f "$plist" ]; then
        launchctl unload "$plist" 2>/dev/null || true
        launchctl load "$plist" 2>&1 | tee -a "$LOG_FILE" || true
      fi
      ;;
  esac
}

stop_service() {
  case "$(uname -s)" in
    Linux)
      command -v systemctl >/dev/null 2>&1 && systemctl --user stop bvg-deamon.service 2>/dev/null || true
      ;;
    Darwin)
      local plist="$HOME/Library/LaunchAgents/com.appfabriek.bvg-deamon.plist"
      [ -f "$plist" ] && launchctl unload "$plist" 2>/dev/null || true
      ;;
  esac
}

local_version() {
  if [ -f "$VERSION_FILE" ]; then
    cat "$VERSION_FILE" | tr -d '[:space:]'
  else
    echo "0.0.0"
  fi
}

# Pre-flight: must have curl + (sha256sum or shasum)
command -v curl >/dev/null 2>&1 || { log ERROR "curl not found"; exit 1; }
if command -v sha256sum >/dev/null 2>&1; then
  SHA_CMD="sha256sum"
elif command -v shasum >/dev/null 2>&1; then
  SHA_CMD="shasum -a 256"
else
  log ERROR "no sha256sum or shasum found - cannot verify download"
  exit 1
fi

log INFO "updater starting (repo=$REPO, lib=$LIB_DIR)"
LOCAL="$(local_version)"
log INFO "local version: $LOCAL"

# Query Releases API for latest stable. We pull all releases and pick the first
# non-prerelease, non-draft one (GitHub returns them tag-sorted).
RELEASES_JSON="$(curl -fsSL -H "User-Agent: bvg-deamon-updater" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/$REPO/releases" --max-time 30)"

# Pick latest stable tag without jq dependency: grep+sed on the API JSON.
LATEST_TAG="$(printf '%s' "$RELEASES_JSON" \
  | tr ',' '\n' \
  | awk 'BEGIN{tag="";stable=1} /"tag_name"/{gsub(/.*"tag_name":[[:space:]]*"/,""); gsub(/".*/,""); tag=$0} /"prerelease"/{if (index($0,"true")>0) stable=0} /"draft"/{if (index($0,"true")>0) stable=0} /^[[:space:]]*$/ || /\}/{if (tag!="" && stable==1) {print tag; exit} tag=""; stable=1}' \
  | head -1)"

if [ -z "$LATEST_TAG" ]; then
  log WARN "no stable release found"
  exit 0
fi
REMOTE="${LATEST_TAG#v}"
log INFO "latest stable tag: $LATEST_TAG ($REMOTE)"

# semver-ish compare. ver_lt $1 $2  → returns 0 only when $1 is STRICTLY
# less than $2. Eerdere implementatie gebruikte alleen `sort -V -C` zonder
# equality-check; gelijke versies (0.4.1 vs 0.4.1) gaven dan "lt=true" en
# triggerden een onnodige download+swap+rollback elke run.
ver_lt() {
  [ "$1" = "$2" ] && return 1
  printf '%s\n%s\n' "$1" "$2" | sort -V -C 2>/dev/null
}
if [ "${1:-}" != "--force" ] && ! ver_lt "$LOCAL" "$REMOTE"; then
  log INFO "already at latest ($LOCAL >= $REMOTE) - nothing to do"
  exit 0
fi
log INFO "update available: $LOCAL -> $REMOTE"

TMP_DIR="$(mktemp -d -t bvg-deamon-update.XXXXXXXX)"
trap 'rm -rf "$TMP_DIR"' EXIT

JS_URL="https://github.com/$REPO/releases/download/$LATEST_TAG/bvg-deamon.js"
SHA_URL="https://github.com/$REPO/releases/download/$LATEST_TAG/bvg-deamon.js.sha256"
JS_TMP="$TMP_DIR/bvg-deamon.js"

log INFO "downloading $JS_URL..."
if ! curl -fsSL -o "$JS_TMP" --max-time 300 "$JS_URL"; then
  log ERROR "download failed"
  exit 2
fi

LOCAL_HASH="$($SHA_CMD "$JS_TMP" | awk '{print tolower($1)}')"
EXPECTED_HASH="$(curl -fsSL --max-time 30 "$SHA_URL" 2>/dev/null | awk '{print tolower($1)}' || true)"
if [ -n "$EXPECTED_HASH" ]; then
  if [ "$LOCAL_HASH" != "$EXPECTED_HASH" ]; then
    log ERROR "sha256 mismatch (downloaded=$LOCAL_HASH expected=$EXPECTED_HASH)"
    exit 3
  fi
  log INFO "sha256 verified ($LOCAL_HASH)"
else
  log WARN "no .sha256 asset in release - skipping checksum (downloaded=$LOCAL_HASH)"
fi

# Atomic swap: keep previous bundle for rollback.
BACKUP="$BUNDLE_PATH.previous"
[ -f "$BUNDLE_PATH" ] && cp "$BUNDLE_PATH" "$BACKUP"

stop_service
mv "$JS_TMP" "$BUNDLE_PATH"
printf '%s' "$REMOTE" > "$VERSION_FILE"

log INFO "starting service on new version $REMOTE..."
restart_service
sleep 3

# Best-effort verify: if the wrapper script exists, run --version.
if [ -x "$BIN_DIR/bvg-deamon" ]; then
  if ! ACTUAL_VER="$("$BIN_DIR/bvg-deamon" --version 2>/dev/null | head -1 | tr -d '[:space:]')"; then
    ACTUAL_VER=""
  fi
fi

if [ -n "${ACTUAL_VER:-}" ] && [ "$ACTUAL_VER" = "$REMOTE" ]; then
  log INFO "update complete: $LOCAL -> $REMOTE"
  exit 0
elif [ -f "$BACKUP" ]; then
  log ERROR "new version did not report $REMOTE (got '${ACTUAL_VER:-empty}') - rolling back"
  stop_service
  mv "$BACKUP" "$BUNDLE_PATH"
  printf '%s' "$LOCAL" > "$VERSION_FILE"
  restart_service
  log ERROR "rollback complete to $LOCAL"
  exit 4
else
  log WARN "could not verify new version but no backup to rollback to - assuming OK"
  exit 0
fi

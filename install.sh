#!/usr/bin/env bash
# bvg-deamon installer for macOS and Linux.
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.sh | bash
#
# One-shot install + pair (recommended — the bvgeert admin UI generates
# this line for you):
#   curl -fsSL https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.sh \
#     | BVG_JOIN_TOKEN=jt_xxx BVG_BVGEERT_HOST=bvgeert.example bash
#
# Env vars (auto-pair triggers when JOIN_TOKEN + a route are both present):
#   BVG_JOIN_TOKEN     one-time pre-approved join token (jt_…)
#   BVG_BVGEERT_HOST   bvgeert hostname for direct HTTPS+WSS route (preferred)
#   BVG_AZURE_HUB      Azure Web PubSub WSS URL (fallback for restricted networks)
#   BVG_TRANSPORT      transport / connection identifier (optional, server
#                      derives from the join-token)
#   BVG_DOMAIN         optional metadata, stored in install.env for reference
#
# Installs Node.js (if missing), downloads the bvg-deamon bundle, places a
# launcher script in /usr/local/bin/bvg-deamon (or ~/.local/bin), and
# attempts to install a system service (launchd on macOS, systemd-user on
# Linux). Auto-pair runs in the foreground so you see the result.
set -euo pipefail

REPO="appfabriek/bvg-deamon"
INSTALL_PREFIX="${BVG_DEAMON_PREFIX:-/usr/local}"
NODE_VERSION="${BVG_NODE_VERSION:-22.11.0}"

err()  { printf "\033[31m%s\033[0m\n" "$1" >&2; }
say()  { printf "\033[36m%s\033[0m\n" "$1"; }
done_() { printf "\033[32m%s\033[0m\n" "$1"; }

require_curl() { command -v curl >/dev/null 2>&1 || { err "curl not found"; exit 1; }; }
require_curl

# Pick install prefix that's writable (drop to ~/.local if needed).
if [ ! -w "$INSTALL_PREFIX/bin" ] && [ "$INSTALL_PREFIX" = "/usr/local" ]; then
  INSTALL_PREFIX="$HOME/.local"
  mkdir -p "$INSTALL_PREFIX/bin"
fi
BIN_DIR="$INSTALL_PREFIX/bin"
LIB_DIR="$INSTALL_PREFIX/lib/bvg-deamon"
mkdir -p "$BIN_DIR" "$LIB_DIR"

# Detect platform.
OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"
case "$OS-$ARCH" in
  linux-x86_64)  NODE_TARBALL="node-v${NODE_VERSION}-linux-x64";;
  linux-aarch64) NODE_TARBALL="node-v${NODE_VERSION}-linux-arm64";;
  darwin-arm64)  NODE_TARBALL="node-v${NODE_VERSION}-darwin-arm64";;
  darwin-x86_64) NODE_TARBALL="node-v${NODE_VERSION}-darwin-x64";;
  *) err "unsupported platform $OS-$ARCH"; exit 1;;
esac

# Install Node locally if not already on PATH.
NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="$(command -v node)"
  say "using existing node: $NODE_BIN ($(node --version))"
else
  NODE_DIR="$LIB_DIR/node-v${NODE_VERSION}"
  if [ ! -x "$NODE_DIR/bin/node" ]; then
    say "downloading Node.js ${NODE_VERSION} for $OS-$ARCH..."
    curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/${NODE_TARBALL}.tar.xz" \
      | tar -xJ -C "$LIB_DIR"
    mv "$LIB_DIR/${NODE_TARBALL}" "$NODE_DIR"
  fi
  NODE_BIN="$NODE_DIR/bin/node"
fi

# Download the bundled CLI from the latest release (fallback to main HEAD).
say "downloading bvg-deamon bundle..."
BUNDLE_URL="https://github.com/${REPO}/releases/latest/download/bvg-deamon.js"
HTTP_CODE=$(curl -fsSL -o "$LIB_DIR/bvg-deamon.js" -w "%{http_code}" "$BUNDLE_URL" 2>/dev/null || echo "404")
if [ "$HTTP_CODE" = "404" ] || [ ! -s "$LIB_DIR/bvg-deamon.js" ]; then
  say "no release found, trying main branch..."
  curl -fsSL "https://raw.githubusercontent.com/${REPO}/main/dist/bvg-deamon.js" -o "$LIB_DIR/bvg-deamon.js"
fi

# Wrapper script.
cat >"$BIN_DIR/bvg-deamon" <<EOF
#!/usr/bin/env bash
exec "$NODE_BIN" "$LIB_DIR/bvg-deamon.js" "\$@"
EOF
chmod +x "$BIN_DIR/bvg-deamon"

done_ "bvg-deamon installed to $BIN_DIR/bvg-deamon"

# Decide pairing route from env-vars.
HAS_TOKEN="${BVG_JOIN_TOKEN:-}"
PAIRED=0
if [ -n "$HAS_TOKEN" ]; then
  CONFIG_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/bvg-deamon"
  mkdir -p "$CONFIG_DIR"
  CONFIG_ENV="$CONFIG_DIR/install.env"
  {
    [ -n "${BVG_DOMAIN:-}" ]       && echo "BVG_DOMAIN=$BVG_DOMAIN"
    [ -n "${BVG_BVGEERT_HOST:-}" ] && echo "BVG_BVGEERT_HOST=$BVG_BVGEERT_HOST"
    [ -n "${BVG_AZURE_HUB:-}" ]    && echo "BVG_AZURE_HUB=$BVG_AZURE_HUB"
    [ -n "${BVG_TRANSPORT:-}" ]    && echo "BVG_TRANSPORT=$BVG_TRANSPORT"
  } > "$CONFIG_ENV"
  chmod 600 "$CONFIG_ENV"

  if [ -n "${BVG_BVGEERT_HOST:-}" ]; then
    say "pairing with bvgeert directly at $BVG_BVGEERT_HOST..."
    "$BIN_DIR/bvg-deamon" join --host "$BVG_BVGEERT_HOST" --token "$HAS_TOKEN" \
      ${BVG_TRANSPORT:+--transport "$BVG_TRANSPORT"} && PAIRED=1 || PAIRED=0
  elif [ -n "${BVG_AZURE_HUB:-}" ]; then
    TRANSPORT="${BVG_TRANSPORT:-default}"
    say "pairing with bvgeert via Azure (transport=$TRANSPORT)..."
    "$BIN_DIR/bvg-deamon" join --hub "$BVG_AZURE_HUB" --transport "$TRANSPORT" --token "$HAS_TOKEN" \
      && PAIRED=1 || PAIRED=0
  fi
fi

# Install system service when paired.
if [ "$PAIRED" = "1" ]; then
  case "$OS" in
    linux)
      UNIT_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/systemd/user"
      mkdir -p "$UNIT_DIR"
      cat >"$UNIT_DIR/bvg-deamon.service" <<EOF
[Unit]
Description=BvGeert transport daemon
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=$BIN_DIR/bvg-deamon daemon
Restart=always
RestartSec=5

[Install]
WantedBy=default.target
EOF
      if command -v systemctl >/dev/null 2>&1; then
        systemctl --user daemon-reload || true
        systemctl --user enable --now bvg-deamon.service || true
        done_ "systemd-user service draait: bvg-deamon.service"
      else
        say "systemd niet beschikbaar — unit-bestand staat in $UNIT_DIR"
      fi
      ;;
    darwin)
      PLIST="$HOME/Library/LaunchAgents/com.appfabriek.bvg-deamon.plist"
      mkdir -p "$(dirname "$PLIST")"
      cat >"$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>com.appfabriek.bvg-deamon</string>
  <key>ProgramArguments</key><array>
    <string>$BIN_DIR/bvg-deamon</string>
    <string>daemon</string>
  </array>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>StandardOutPath</key><string>/tmp/bvg-deamon.log</string>
  <key>StandardErrorPath</key><string>/tmp/bvg-deamon.err</string>
</dict>
</plist>
EOF
      launchctl unload "$PLIST" 2>/dev/null || true
      launchctl load "$PLIST"
      done_ "launchd-agent geladen: com.appfabriek.bvg-deamon"
      ;;
  esac
  exit 0
fi

case ":$PATH:" in
  *":$BIN_DIR:"*) ;;
  *) say "Add $BIN_DIR to your PATH: export PATH=\"$BIN_DIR:\$PATH\"" ;;
esac

say "next step: bvg-deamon join --host <bvgeert-host> --token <jt_xxx>"
say "           of (Azure-fallback): bvg-deamon join --hub <wss-url> --transport <id> --token <jt_xxx>"

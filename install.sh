#!/usr/bin/env bash
# bvg-deamon installer for macOS and Linux.
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.sh | bash
#
# One-shot install + pair (recommended — the bvgeert admin UI generates
# this line for you):
#   curl -fsSL https://raw.githubusercontent.com/appfabriek/bvg-deamon/main/install.sh \
#     | BVG_JOIN_TOKEN=jt_xxx BVG_AZURE_HUB=wss://... BVG_TRANSPORT=my-conn bash
#
# Env vars (all optional; supplied together they trigger an automatic
# `bvg-deamon join` after install):
#   BVG_JOIN_TOKEN   one-time pre-approved join token (jt_…)
#   BVG_AZURE_HUB    full Azure Web PubSub WSS URL (with anonymous access token)
#   BVG_TRANSPORT    transport / connection identifier on the bvgeert side
#   BVG_DOMAIN       optional metadata, written to the config file for reference
#
# Installs Node.js (if missing), downloads the latest bvg-deamon bundle,
# and places a launcher script in /usr/local/bin/bvg-deamon (or
# ~/.local/bin/bvg-deamon if /usr/local isn't writable).
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

# If pairing env vars are supplied, persist them and auto-pair.
if [ -n "${BVG_JOIN_TOKEN:-}" ] && [ -n "${BVG_AZURE_HUB:-}" ]; then
  CONFIG_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/bvg-deamon"
  mkdir -p "$CONFIG_DIR"
  CONFIG_ENV="$CONFIG_DIR/install.env"
  {
    [ -n "${BVG_DOMAIN:-}" ] && echo "BVG_DOMAIN=$BVG_DOMAIN"
    echo "BVG_AZURE_HUB=$BVG_AZURE_HUB"
    [ -n "${BVG_TRANSPORT:-}" ] && echo "BVG_TRANSPORT=$BVG_TRANSPORT"
  } > "$CONFIG_ENV"
  chmod 600 "$CONFIG_ENV"

  TRANSPORT="${BVG_TRANSPORT:-default}"
  say "pairing with bvgeert via Azure (transport=$TRANSPORT)..."
  "$BIN_DIR/bvg-deamon" join \
    --hub "$BVG_AZURE_HUB" \
    --transport "$TRANSPORT" \
    --token "$BVG_JOIN_TOKEN"
  done_ "paired — credentials at $CONFIG_DIR/credentials.json"
  exit 0
fi

case ":$PATH:" in
  *":$BIN_DIR:"*) ;;
  *) say "Add $BIN_DIR to your PATH: export PATH=\"$BIN_DIR:\$PATH\"" ;;
esac

say "next step: bvg-deamon join --hub <wss-url> --transport <identifier> [--token <jt_xxx>]"

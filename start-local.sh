#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

LOCAL_NODE_DIR=".tools/node-v22.12.0-darwin-arm64/bin"

if [ -x "$LOCAL_NODE_DIR/npm" ]; then
  export PATH="$PWD/$LOCAL_NODE_DIR:$PATH"
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm was not found. Please install Node.js LTS, then run this script again."
  exit 1
fi

if [ ! -d "node_modules" ]; then
  npm install
fi

npm run build

echo ""
echo "Personal site preview:"
echo "http://127.0.0.1:4173/"
echo ""

if command -v open >/dev/null 2>&1; then
  open "http://127.0.0.1:4173/" >/dev/null 2>&1 || true
fi

npm run preview -- --host 127.0.0.1 --port 4173

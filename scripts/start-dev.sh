#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-3020}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Stop any stale Next dev servers on common local ports.
for p in 3000 3001 3020; do
  lsof -ti ":$p" 2>/dev/null | xargs kill -9 2>/dev/null || true
done

rm -rf .next

export WATCHPACK_POLLING=true
exec npx next dev --hostname 127.0.0.1 --port "$PORT"

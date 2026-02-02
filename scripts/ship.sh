#!/usr/bin/env bash
set -euo pipefail

MSG="${1:-chore: deploy}"

git add -A

# 변경이 없으면(배포 트리거만 필요할 때) empty commit 허용
if git diff --cached --quiet; then
  git commit --allow-empty -m "$MSG"
else
  git commit -m "$MSG"
fi

git push origin main
echo "✅ pushed to origin/main (Cloudflare Pages will deploy)"

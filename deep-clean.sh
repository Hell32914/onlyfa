#!/bin/bash

# Deep cleaning script - for daily maintenance
# This performs aggressive cleanup and rebuilds

set -e

LOG_DIR="./logs"
APP_DIR="./app"

echo "🔨 Starting deep maintenance..."
echo "=================================="

# 1. Stop PM2 app gracefully
echo "⏹️  Stopping application..."
if command -v pm2 &> /dev/null; then
  pm2 stop onlyfa-app --wait-ready 2>/dev/null || true
  sleep 5
fi

# 2. Clear Node.js cache
echo "🗑️  Clearing Node.js caches..."
rm -rf "$APP_DIR/node_modules/.cache" 2>/dev/null || true
rm -rf "$APP_DIR/dist/.vite" 2>/dev/null || true

# 3. Clear npm cache
npm cache clean --force 2>/dev/null || true

# 4. Clear disk space - remove very old logs (> 30 days)
if [ -d "$LOG_DIR" ]; then
  echo "📋 Removing old logs (> 30 days)..."
  find "$LOG_DIR" -name "*.log.*" -type f -mtime +30 -delete 2>/dev/null || true
fi

# 5. Rebuild application
echo "🔨 Rebuilding application..."
npm run build 2>&1 | tail -20

# 6. Start application
echo "▶️  Starting application..."
if command -v pm2 &> /dev/null; then
  pm2 start ecosystem.config.cjs --update-env 2>/dev/null || true
  sleep 10
  
  # Verify status
  echo "📊 Application status:"
  pm2 status onlyfa-app || true
fi

echo "=================================="
echo "✅ Deep maintenance completed at $(date)"
echo ""
echo "📊 Current disk usage:"
du -sh "$APP_DIR" 2>/dev/null || echo "  (unable to calculate)"

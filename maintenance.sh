#!/bin/bash

# Maintenance script to prevent memory leaks and optimize server performance

set -e

LOG_DIR="./logs"
APP_DIR="./app"

# Create logs directory if it doesn't exist
mkdir -p "$LOG_DIR"

echo "🔧 Starting maintenance tasks..."
echo "=================================="

# 1. Clear npm cache
echo "📦 Clearing npm cache..."
npm cache clean --force 2>/dev/null || true

# 2. Remove old logs (older than 7 days)
if [ -d "$LOG_DIR" ]; then
  echo "🗑️  Cleaning old logs..."
  find "$LOG_DIR" -name "*.log" -type f -mtime +7 -delete 2>/dev/null || true
fi

# 3. Rotate logs if they're too large (> 100MB)
for logfile in "$LOG_DIR"/*.log; do
  if [ -f "$logfile" ]; then
    SIZE=$(du -b "$logfile" | cut -f1)
    if [ "$SIZE" -gt 104857600 ]; then
      echo "📋 Rotating large log: $(basename $logfile)"
      mv "$logfile" "$logfile.$(date +%s)"
      touch "$logfile"
    fi
  fi
done

# 4. Check Node process memory usage
echo "💾 Checking process memory..."
if command -v pm2 &> /dev/null; then
  pm2 status || true
fi

# 5. Restart PM2 app with graceful shutdown
if command -v pm2 &> /dev/null; then
  echo "🔄 Restarting application gracefully..."
  pm2 restart onlyfa-app --wait-ready --listen-timeout 3000 || echo "⚠️ PM2 restart failed"
fi

echo "=================================="
echo "✅ Maintenance completed at $(date)"

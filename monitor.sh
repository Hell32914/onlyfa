#!/bin/bash

# Real-time monitoring script
# Usage: bash monitor.sh

INTERVAL=5  # Update every 5 seconds
APP_NAME="onlyfa-app"

echo "🔍 Starting real-time monitoring of $APP_NAME..."
echo "=================================="
echo "Press Ctrl+C to stop"
echo ""

while true; do
  clear
  
  echo "📊 PM2 Status at $(date '+%Y-%m-%d %H:%M:%S')"
  echo "=================================="
  pm2 status $APP_NAME 2>/dev/null || echo "⚠️  PM2 not available"
  
  echo ""
  echo "💾 Memory Usage:"
  echo "=================================="
  if command -v ps &> /dev/null; then
    # Get memory usage of Node process
    NODE_PID=$(pm2 pid $APP_NAME 2>/dev/null | head -1)
    if [ ! -z "$NODE_PID" ] && [ "$NODE_PID" != "unknown" ]; then
      ps aux | grep -E "PID|$NODE_PID" | grep -v grep || echo "  Process not found"
    fi
  fi
  
  echo ""
  echo "📈 Recent Log Entries (last 20):"
  echo "=================================="
  tail -20 logs/combined.log 2>/dev/null || echo "  (logs not available)"
  
  echo ""
  echo "⏳ Refreshing in ${INTERVAL}s... (Ctrl+C to stop)"
  sleep $INTERVAL
done

#!/bin/bash

# Diagnostic script - analyze server health

echo "🏥 Server Health Diagnostic Report"
echo "Generated: $(date)"
echo "===================================="
echo ""

# 1. System Resources
echo "📊 SYSTEM RESOURCES"
echo "---"
df -h | head -6
echo ""
echo "Memory Usage:"
free -h 2>/dev/null | grep -E "Mem|Swap" || echo "  (not available)"
echo ""

# 2. Node.js Processes
echo "🔵 NODE.JS PROCESSES"
echo "---"
ps aux | grep -E "node|npm" | grep -v grep || echo "  No processes found"
echo ""

# 3. PM2 Status
echo "⚙️ PM2 STATUS"
echo "---"
if command -v pm2 &> /dev/null; then
  pm2 status 2>/dev/null || echo "  PM2 not running"
  echo ""
  echo "PM2 Info:"
  pm2 info onlyfa-app 2>/dev/null | head -20 || echo "  App not found"
else
  echo "  PM2 not installed"
fi
echo ""

# 4. Network Status
echo "🌐 NETWORK STATUS"
echo "---"
if command -v netstat &> /dev/null; then
  echo "Port 3000 status:"
  netstat -tlnp 2>/dev/null | grep 3000 || echo "  Not listening"
  echo ""
  echo "Port 80 status:"
  netstat -tlnp 2>/dev/null | grep ':80 ' || echo "  Not listening"
else
  echo "  netstat not available"
fi
echo ""

# 5. File System Usage
echo "💾 FILE SYSTEM USAGE"
echo "---"
if [ -d "logs" ]; then
  echo "Logs directory:"
  du -sh logs 2>/dev/null || echo "  Unable to calculate"
  echo ""
  echo "Number of log files: $(find logs -name '*.log*' 2>/dev/null | wc -l)"
fi
echo ""

# 6. Recent Errors
echo "❌ RECENT ERRORS (last 10)"
echo "---"
if [ -f "logs/err.log" ]; then
  tail -10 logs/err.log || echo "  No errors"
else
  echo "  Error log not found"
fi
echo ""

# 7. Recent Activity
echo "📝 RECENT ACTIVITY (last 15 lines)"
echo "---"
if [ -f "logs/combined.log" ]; then
  tail -15 logs/combined.log || echo "  No activity"
else
  echo "  Activity log not found"
fi
echo ""

# 8. Nginx Status
echo "🔲 NGINX STATUS"
echo "---"
if command -v systemctl &> /dev/null; then
  systemctl status nginx 2>/dev/null | head -5 || echo "  systemctl not available"
else
  echo "  systemctl not available"
fi
echo ""

# 9. Disk Space Warning
echo "⚠️ DISK SPACE CHECK"
echo "---"
DISK_USAGE=$(df -h / | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -gt 80 ]; then
  echo "🔴 WARNING: Disk usage is ${DISK_USAGE}% - CRITICAL!"
elif [ "$DISK_USAGE" -gt 70 ]; then
  echo "🟠 WARNING: Disk usage is ${DISK_USAGE}% - HIGH"
else
  echo "🟢 OK: Disk usage is ${DISK_USAGE}%"
fi
echo ""

echo "===================================="
echo "📋 End of Diagnostic Report"

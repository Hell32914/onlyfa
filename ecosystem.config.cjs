module.exports = {
  apps: [{
    name: 'onlyfa-app',
    script: 'npx',
    args: 'serve -s app/dist -l 3000',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    max_restarts: 5,
    min_uptime: '60s',
    env: {
      NODE_ENV: 'production',
      NODE_OPTIONS: '--max-old-space-size=512'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }],
  // Graceful shutdown and restart
  kill_timeout: 5000,
  listen_timeout: 3000
};

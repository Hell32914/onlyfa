#!/bin/bash

# Скрипт для запуска приложения на сервере

echo "🚀 Starting OnlyFA application..."

# Установка зависимостей
echo "📦 Installing dependencies..."
npm install

# Сборка приложения
echo "🔨 Building application..."
npm run build

# Создание директории для логов
mkdir -p logs

# Установка serve глобально (если еще не установлен)
if ! command -v serve &> /dev/null; then
    echo "📥 Installing serve..."
    npm install -g serve
fi

# Установка PM2 глобально (если еще не установлен)
if ! command -v pm2 &> /dev/null; then
    echo "📥 Installing PM2..."
    npm install -g pm2
fi

# Остановка предыдущего процесса (если запущен)
pm2 delete onlyfa-app 2>/dev/null || true

# Запуск приложения через PM2
echo "▶️ Starting with PM2..."
pm2 start ecosystem.config.cjs

# Сохранение конфигурации PM2 для автозапуска
pm2 save

# Настройка автозапуска PM2 при перезагрузке сервера
pm2 startup

echo "✅ Application started successfully!"
echo "📊 Check status: pm2 status"
echo "📝 Check logs: pm2 logs onlyfa-app"
echo "🔄 Restart: pm2 restart onlyfa-app"

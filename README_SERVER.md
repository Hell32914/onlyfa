# Инструкция по настройке production-сервера

## Проблемы старой конфигурации

1. ❌ `vite preview` не предназначен для production
2. ❌ Нет автоматического перезапуска при падении
3. ❌ Нет логирования ошибок
4. ❌ Неправильная конфигурация для SPA-маршрутизации

## Решение

### Вариант 1: PM2 + serve (рекомендуется для небольших проектов)

```bash
# 1. Установите зависимости и соберите проект
npm install
npm run build

# 2. Установите PM2 и serve глобально
npm install -g pm2 serve

# 3. Запустите приложение
chmod +x start.sh
./start.sh
```

Или вручную:
```bash
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

### Вариант 2: Nginx (рекомендуется для production)

1. Соберите приложение:
```bash
npm install
npm run build
```

2. Настройте Nginx:
```bash
# Скопируйте конфигурацию
sudo cp nginx.conf /etc/nginx/sites-available/veagency.net
sudo ln -s /etc/nginx/sites-available/veagency.net /etc/nginx/sites-enabled/

# Отредактируйте путь в конфигурации
sudo nano /etc/nginx/sites-available/veagency.net
# Измените: root /path/to/app/dist; 
# На: root /full/path/to/onlyfa/app/dist;

# Проверьте конфигурацию и перезапустите
sudo nginx -t
sudo systemctl restart nginx
```

3. Настройте SSL (для HTTPS):
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d veagency.net -d www.veagency.net
```

## Управление PM2

```bash
# Статус
pm2 status

# Логи (для отладки падений)
pm2 logs onlyfa-app

# Перезапуск
pm2 restart onlyfa-app

# Остановка
pm2 stop onlyfa-app

# Удаление
pm2 delete onlyfa-app

# Мониторинг
pm2 monit
```

## Отладка проблем

### Сервер падает сразу после запуска

```bash
# Проверьте логи PM2
pm2 logs onlyfa-app --lines 100

# Проверьте, установлен ли serve
which serve
npm install -g serve

# Проверьте, собран ли проект
ls -la app/dist/
```

### ERR_CONNECTION_REFUSED

1. Проверьте, запущен ли процесс:
```bash
pm2 status
# или для Nginx:
sudo systemctl status nginx
```

2. Проверьте порт:
```bash
# Для PM2+serve (порт 3000):
curl http://localhost:3000

# Для Nginx (порт 80):
curl http://localhost
```

3. Проверьте firewall:
```bash
sudo ufw allow 80
sudo ufw allow 443
sudo ufw status
```

### Проблемы с маршрутами (/privacy, /about не работают)

Это решается конфигурацией:
- **PM2+serve**: `serve -s` автоматически обрабатывает SPA-маршруты
- **Nginx**: `try_files $uri $uri/ /index.html;` в конфигурации

## Мониторинг

```bash
# Использование PM2
pm2 monit

# Логи в реальном времени
pm2 logs onlyfa-app --lines 50

# Для Nginx
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

## Автозапуск после перезагрузки сервера

```bash
# PM2
pm2 startup
pm2 save

# Nginx
sudo systemctl enable nginx
```

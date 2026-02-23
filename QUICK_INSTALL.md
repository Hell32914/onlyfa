# 🚀 Швидка установка оптимізацій

## Крок 1: Обновити конфігурацію
Усі файли уже змінено. Перевірте що змінилися:
```bash
git status
```

## Крок 2: Перезавантажити PM2
```bash
npm run pm2:stop
npm run pm2:start
npm run pm2:status
```

## Крок 3: Установити Cron Job'и (Linux/Mac)
```bash
# Зробити скрипти виконуваними
chmod +x maintenance.sh deep-clean.sh monitor.sh

# Додати в crontab
crontab -e

# Вставити (замінити /path/to/onlyfa на реальний шлях):
0 */4 * * * cd /path/to/onlyfa && bash maintenance.sh >> ./logs/maintenance.log 2>&1
0 3 * * * cd /path/to/onlyfa && bash deep-clean.sh >> ./logs/maintenance.log 2>&1
```

## Крок 4: Перезавантажити Nginx
```bash
sudo systemctl reload nginx
# або
sudo service nginx reload
# або
sudo nginx -s reload
```

## Крок 5: Моніторинг
```bash
# Реальний час
bash monitor.sh

# Логи PM2
npm run pm2:logs

# Статус
npm run pm2:status
```

## ✅ Все готово!

Сервер тепер буде автоматично:
- ✅ Очищувати кеш кожні 4 години
- ✅ Переривати логи коли вони великі
- ✅ Перезавантажуватися при проблемах з пам'яттю
- ✅ Робити глибоку очистку щодня
- ✅ Ефективно обслуговувати статичні файли

## 🔧 Важливо!

1. **Перевірьте логи** першою ніч: `tail -f logs/combined.log`
2. **Запустіть monitor.sh** для перевірки: `bash monitor.sh`
3. **Переконайтесь** що nginx працює: `curl http://veagency.net` або `curl https://veagency.net`

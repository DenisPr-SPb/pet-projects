# Используем базовый образ Node.js с Alpine
FROM node:20-alpine
USER root
# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только package.json и package-lock.json, чтобы кэшировать npm install
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Устанавливаем переменные окружения для корректной работы Chokidar (для Vite)
ENV CHOKIDAR_USEPOLLING=true

# Открываем порт для Vite
EXPOSE 5173

# Запускаем команду, чтобы запустить приложение в режиме разработки
CMD ["npm", "run", "dev"]

# Временно работаем от root (для диагностики)
# USER appuser (удалено)

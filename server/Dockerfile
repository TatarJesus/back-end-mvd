# vim: set ft=dockerfile:
# Dockerfile - Docker markup language version x.0
# Encoding: UTF-8

# Этап сборки
FROM node:18.16.1 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

COPY . .

# Собираем проект
RUN npm run build

# Этап запуска
FROM node:18.16.1

# Создаем пользователя и группу для безопасности
RUN groupadd -r nestjs && useradd -r -s /bin/false -g nestjs nestjs

# Устанавливаем рабочую директорию и права доступа
WORKDIR /usr/app

COPY --from=builder /usr/src/app/dist ./dist
COPY package*.json ./

# Установите только продакшен-зависимости
RUN npm install --production

# Переключитесь на пользователя nestjs для безопасности
USER nestjs

# Метки согласно спецификации OCI
LABEL org.opencontainers.image.title="NestJS Application" \
      org.opencontainers.image.description="A Dockerized NestJS application" \
      org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.authors="YourName <your.email@example.com>"

EXPOSE 8000

CMD ["npm", "start"]
#### Запуск или перезапуск с пересборкой (если изменился Dockerfile или зависимости):
```
docker compose up --build
```
или:
```
docker compose down && docker-compose up --build
```
#### Перезапуск без пересборки:
```
docker compose restart
```
#### Запуск:
```
docker compose up
```
#### Остановить:
```
docker compose down
```
#### Запуск в фоновом режиме (-d — detached mode):
```
docker compose up -d
```
#### Выключить конкретный сервис:
```
docker compose stop <контейнер>
```
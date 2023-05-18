DC = docker-compose -f docker-compose.yml -p mirea-rksp

up:
	$(DC) up

up-build:
	$(DC) up --build

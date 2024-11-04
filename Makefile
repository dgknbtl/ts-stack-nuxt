up: 
	@echo "Starting development environment..."
	-docker-compose up

up-d: 
	@echo "Starting development environment in detached mode..."
	docker-compose up -d

up-prod: 
	@echo "Starting production environment..."
	docker-compose -f docker-compose.prod.yml up

up-prod-d: 
	@echo "Starting production environment in detached mode..."
	docker-compose -f docker-compose.prod.yml up -d

down: 
	@echo "Stopping development environment..."
	-docker-compose down

down-prod: 
	@echo "Stopping production environment..."
	docker-compose -f docker-compose.prod.yml down

logs: 
	@echo "Showing logs..."
	docker-compose logs -f

logs-prod: 
	@echo "Showing production logs..."
	docker-compose -f docker-compose.prod.yml logs -f

clean: 
	@echo "Cleaning up unused images and volumes..."
	docker-compose down -v --rmi all --remove-orphans

build:
	@echo "Building development environment..."
	docker-compose build

build-prod:
	@echo "Building production environment..."
	docker-compose -f docker-compose.prod.yml build

.PHONY: up down up-prod down-prod logs logs-prod clean build build-prod

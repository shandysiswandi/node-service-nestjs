# -------------------- including environment variable -------------------------------------------- #
include .env

# -------------------- define environment variable ----------------------------------------------- #
VERSION					= $(shell git describe --tags --always)

DOCKER_CONTAINER_NAME	= $(NAME)
DOCKER_IMAGE_NAME		= $(NAME):$(VERSION)

CONTAINER_NAME_EXIST	= $(shell docker ps -aq --filter name=${DOCKER_CONTAINER_NAME})
IMAGE_NAME_EXIST		= $(shell docker images -aq ${DOCKER_IMAGE_NAME})

# -------------------- define command target for docker ------------------------------------------ #
up: clean docker-build docker-run

clean: docker-rm-container docker-rm-image

docker-build:
	@docker build -f Dockerfile -t $(DOCKER_IMAGE_NAME) .

docker-run:
	@docker run -d --restart=always --network=mysql --name=$(DOCKER_CONTAINER_NAME) -p $(PORT):$(PORT) $(DOCKER_IMAGE_NAME)

docker-rm-container:
	@if [ -n "$(CONTAINER_NAME_EXIST)" ]; then docker rm $(CONTAINER_NAME_EXIST) --force; fi;

docker-rm-image:
	@if [ -n "$(IMAGE_NAME_EXIST)" ]; then docker image rm $(IMAGE_NAME_EXIST) --force; fi;

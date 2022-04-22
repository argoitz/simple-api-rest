# Nodejs Simple API REST

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)
![Last commit](https://img.shields.io/github/last-commit/argoitz/simple-api-rest)

# Pre-requisites

- Install [Docker compose](https://docs.docker.com/compose/install/)

# Getting started

- Clone the repository

```
git clone  https://github.com/argoitz/simple-api-rest.git
```

- Create .env file and make the appropriate modifications

```
cp .env.example .env
```

- Create Docker container

```
docker-compose build
```

- Run Docker container

```
docker-compose up
```

- Connect to docker container

```
winpty docker exec -it simple-api-rest bash
```

# Importing API Collection in Postman

You can check the endpoints by importing this collection to your postman:
https://www.getpostman.com/collections/f86bd8d2d1ba683bf9bf

## Author

- [Argoitz Estebanez](https://github.com/argoitz)

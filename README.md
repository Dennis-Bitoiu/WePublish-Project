<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

The application can be accessed at `http://localhost:3000`

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docker Build

Before you build the Docker image, make sure Docker is available in your environment. Execute the following commands from the root of the project

```bash
  docker build . --tag <image_name>
  # build container

```

This should build a Docker image named `image_name`

## Docker Run

Run the newly created Docker image, `image_name`, by executing the following command from the terminal:

```bash
docker run --rm <image_name>
```

##### Options

- `--rm` option automatically clean up the container and remove the file system when the container exit.

This should start up the application and it can be accessed at `http://localhost:3000`

## Test

```bash
# unit tests
$ npm run test

```

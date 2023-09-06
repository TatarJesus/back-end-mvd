# Mebel v Dom NestJS Project

This repository contains the codebase for a NestJS-based backend application. The application is containerized using Docker for easy setup and deployment.

## Table of Contents

- [Structure](#structure)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Documentation](#documentation)

## Structure

- **server**: This directory contains the NestJS application, complete with its own Docker configuration and necessary files for setting up the development environment.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (Recommended version as per `server/package.json`)

## Setup & Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/TatarJesus/back-end-mvd
    cd back-end-mvd
    ```

2. Navigate to the `server` directory:

    ```bash
    cd server
    ```

3. Copy the example environment file:

    ```bash
    cp .env.example .env
    ```

4. Modify `.env` to match your environment settings.

5. Go back to the root directory and start the Docker containers using Docker Compose:

    ```bash
    cd ..
    docker-compose up --build
    ```

The server should now be running on the specified port (default is 8001).

## Documentation

For detailed documentation related to the NestJS codebase, please refer to the [server's README](./server/README.md). Additionally, you can find more about NestJS at its [official documentation](https://docs.nestjs.com/).

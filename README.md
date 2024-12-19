# ts-stack-next
A comprehensive Docker-based development environment for modern web applications using TypeScript on both client and server sides, with Node.js, Express, MongoDB, and Next.js. This repository serves as a kick-start template for new full-stack projects.

## Tech Stack
### Backend
- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- Husky
- Lint-staged
- ESLint
- Prettier
- Docker

### Frontend
- Next.js
- ESLint
- Husky
- Lint-staged
- Docker

## Installation

#### Getting Started

1. **Clone the repository**: 

    ```bash
    git clone https://github.com/dgknbtl/ts-stack-next.git
    cd ts-stack-next
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development environment**:

    ```bash
    make up
    ```

4. **For production, use**:

    ```bash
    make up-prod
    ```

*See the `Makefile` for all available commands.*

### Docker Commands

- **Start development environment**: 
  ```bash
  docker-compose up
  ```

- **Start development environment in detached mode**: 
  ```bash
  docker-compose up -d
  ```

- **Stop development environment**: 
  ```bash
  docker-compose down
  ```

- **Start production environment**: 
  ```bash
  docker-compose -f docker-compose.prod.yml up
  ```

- **Stop production environment**: 
  ```bash
  docker-compose -f docker-compose.prod.yml down
  ```

- **View logs**: 
  ```bash
  docker-compose logs -f
  ```

## Project Structure

- **client/**: Contains the frontend code using Next.js and React.
- **server/**: Contains the backend code using Node.js and Express.
- **docker-compose.yml**: Configuration for Docker services in development.
- **docker-compose.prod.yml**: Configuration for Docker services in production.
- **Makefile**: Contains commands for managing the Docker environment.

### Backend Module Structure

The backend is organized into modules, each responsible for a specific domain of the application. Below is an explanation of the `user` module, which handles user-related operations.

#### User Module 

- **Model (`user.model.ts`)**: 
  - Defines the `User` schema using Mongoose.
  - Implements password hashing middleware to securely store user passwords.
  - Exports the `User` model for use in other parts of the application.

- **Service (`user.service.ts`)**: 
  - Contains business logic related to users.
  - Provides methods for creating and managing users.
  - Interacts with the `User` model to execute database operations.

- **Controller (`user.controller.ts`)**: 
  - Handles HTTP requests and responses.
  - Uses the `UserService` to execute operations and send suitable responses.
  - Manages error handling and response status codes.

- **Routes (`user.routes.ts`)**: 
  - Defines the API endpoints for user-related operations.
  - Maps HTTP methods and paths to controller actions.
  - Uses Express router to modularize route definitions.

- **Index (`index.ts`)**: 
  - Aggregates and exports the module components (model, service, controller, routes).
  - Simplifies imports in other parts of the application by providing a single entry point for the module.


## Linting and Formatting

- **Pre-commit Hook**: Run `npm install` in the root folder to set up automatic linting of staged files before each commit.

- **Linting Commands**:
  - `npm run lint`: Run linting checks on both frontend and backend code
  - `npm run lint-staged`: Run linting only on staged files in both frontend and backend

The linting commands will respect the individual ESLint and Prettier configurations defined in the client/ and server/ folders.

## License

MIT License

Copyright (c) 2024 Dogukan Batal

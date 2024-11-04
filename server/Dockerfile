# Dockerfile
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Development environment
FROM base AS development
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

# Production environment
FROM base AS production
ENV NODE_ENV=production
ENV NODE_PATH=./dist 
RUN npm run build
CMD ["npm", "run", "start"]

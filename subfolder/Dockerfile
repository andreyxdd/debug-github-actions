FROM node:latest-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY . .

RUN npm run try

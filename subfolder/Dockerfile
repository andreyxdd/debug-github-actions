FROM node:latest

ENV MIN=${INPUT_MIN}
ENV MAX=${INPUT_MAX}

WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY . .

RUN npm run try

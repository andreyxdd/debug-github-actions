FROM node:16-alpine

ENV MIN=${INPUT_MIN}
ENV MAX=${INPUT_MAX}

WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY . .

RUN MIN=$MIN MAX=$MAX npm run try

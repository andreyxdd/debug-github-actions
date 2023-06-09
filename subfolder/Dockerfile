FROM node:16-alpine

ARG INPUT_MIN=${INPUT_MIN}
ARG INPUT_MAX=${INPUT_MAX}

ENV MIN=${INPUT_MIN}
ENV MAX=${INPUT_MAX}

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run try

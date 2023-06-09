FROM node:16-alpine

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run try

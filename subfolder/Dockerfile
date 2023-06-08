FROM node:16-alpine

ARG INPUT_MIN=${INPUT_MIN}
ARG INPUT_MAX=${INPUT_MAX}

ENV MIN=${INPUT_MIN}
ENV MAX=${INPUT_MAX}

WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY . .

CMD ["npm","run","try"]

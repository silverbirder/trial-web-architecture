FROM node:current-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV PORT=8080

CMD [ "npm","run", "start" ]
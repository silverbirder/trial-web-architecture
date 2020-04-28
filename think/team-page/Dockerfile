FROM node:current-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN npm run build:prod

ENV PORT=8080 \
    TEAM_DECIDE_HOST="https://team-decide.fly.dev/decide" \
    TEAM_SEARCH_HOST="https://team-search.fly.dev/search" \
    NODE_ENV=production

CMD [ "node","server.js" ]
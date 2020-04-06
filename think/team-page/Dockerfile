FROM node:current-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV PORT=8080 \
    TEAM_DECIDE_HOST="https://team-search.fly.dev/search" \
    TEAM_SEARCH_HOST="https://team-decide.fly.dev/decide"

CMD [ "npm","run", "start" ]
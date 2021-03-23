FROM node:12-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=development --silent
COPY . .
RUN npm run build

# production
FROM node:12-alpine

ENV NODE_ENV=production
RUN apk add --no-cache tini
WORKDIR /app
RUN chown node:node /app
USER node

COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/package-lock.json /app/package-lock.json
COPY --from=builder /app/.env /app/.env
COPY --from=builder /app/dist/ /app/dist/

RUN npm install --only=production --silent

CMD [ "/sbin/tini", "--", "node", "dist/main.js" ]
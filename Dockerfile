FROM node:22.11.0-alpine:3.20 AS build_step
# ENV FOO=/bar

WORKDIR /home/app/portfolio
COPY ./package-lock.json ./package.json ./angular.json ./tsconfig.app.json ./tsconfig.json ./tsconfig.spec.json  ./
COPY ./src ./src

RUN addgroup -S app_group && adduser -S app -u 1050 -G app_group
RUN chown -R app:app_group /home/app/
USER app

RUN npm install
RUN npm run build

FROM node:alpine AS delivery_step
USER app
WORKDIR /home/app/portfolio
COPY --from=build_step /home/app/portfolio/dist ./dist
# Copying built files into /usr/node/dist
COPY --from=build_step /home/app/portfolio/node_modules ./node_modules
# Copying node_modules into /usr/node/
COPY ./server.js  ./
# Copying server.js from current directory

EXPOSE 80
CMD ["node", "server.js"]
# ENTRYPOINT ["node", "server.js"]

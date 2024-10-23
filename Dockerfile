FROM node:alpine AS node_modules_step
# ENV FOO=/bar
WORKDIR /usr/node/
COPY ./package-lock.json .
COPY ./package.json .
RUN npm install

FROM node:alpine AS build_step
WORKDIR /usr/node
COPY --from=node_modules_step /usr/node/node_modules ./node_modules
COPY --from=node_modules_step /usr/node/package-lock.json .
COPY --from=node_modules_step /usr/node/package.json .
COPY ./src ./src
COPY ./angular.json .
COPY ./tsconfig.app.json .
COPY ./tsconfig.json .
COPY ./tsconfig.spec.json .
RUN npm run build

FROM node:alpine AS delivery_step
WORKDIR /usr/node
COPY --from=build_step /usr/node/dist ./dist  
# Copying builded files into /usr/node/dist
COPY --from=node_modules_step /usr/node/node_modules ./node_modules
# Copying node_modules into /usr/node/
COPY ./server.js  ./
# Copying server.js from current directory

EXPOSE 80
CMD ["node", "server.js"]
# ENTRYPOINT ["node", "server.js"]
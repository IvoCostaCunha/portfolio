FROM node:22.11.0-alpine3.20 AS build_step

WORKDIR /home/app/portfolio
COPY ./package-lock.json ./package.json ./angular.json ./tsconfig.app.json ./tsconfig.json ./tsconfig.spec.json ./
COPY ./src ./src

RUN npm install
RUN npm run build

FROM node:22.11.0-alpine3.20 AS delivery_step

RUN adduser -D app
USER app
WORKDIR /home/app/portofolio

COPY --from=build_step /home/app/portfolio/dist ./dist
# Copying built files into /usr/node/dist
COPY --from=build_step /home/app/portfolio/node_modules ./node_modules
COPY ./server.js  ./

EXPOSE 80
CMD ["node", "server.js"]
# ENTRYPOINT ["node", "server.js"]

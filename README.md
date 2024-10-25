# Portfolio-app
This Angular app is my current portfolio frontend. It's not finished, a lot still needs to be done, it's more like a base for future updates, if I don't decide to rewrite it in React.
This frontend may in the future be connected to an [API](https://github.com/IvoCostaCunha/portfolio-api.git) but for now I'm trying to get this part right.

I use [Express](https://github.com/expressjs/express.git) as a server.

# Requirements
- [NodeJS](https://nodejs.org/en) (Tested with node@22.10.0)
- [Docker](https://www.docker.com/) (Tested with docker@27.2.0) (Optional)

## Installation

The easier way to install this app is via docker and it also provides the most optimised installation since I only serve via express the minimum.

I use the port 80 since it's the http port, so either make sure it's available on your end.
Or change it in :
- server.js (Express config)
- Docker port forwarding (Replace 80:80 by 8080:80 for example)

### Docker
```sh
docker build -t me/portfolio:latest .
docker docker run -p 80:80 me/portfolio:latest
```

### Without Docker
```sh
npm i
npm run build
node dist/browser
```

Either way the website will then be accessible at http://127.0.0.1:80.
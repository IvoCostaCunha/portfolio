# Portfolio-app
This Angular app is my current portfolio frontend. It's not finished, a lot still needs to be done, it's more like a base for future updates, if I don't decide to rewrite it in React.
This frontend may in the future be connected to an [API](https://github.com/IvoCostaCunha/portfolio-api.git) but for now I'm trying to get this part right.

I use [Express](https://github.com/expressjs/express.git) as a server.

# Requirements
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en) (Tested with node@23.1.0)
- [Docker](https://www.docker.com/) (Tested with docker@27.2.0) (Optional)

## Installation

The easier way to install this app is via docker and it also provides the most optimised installation since I only serve via express the minimum.

First clone this repository.
```sh
git clone https://github.com/IvoCostaCunha/portfolio.git
cd portfolio
```

### With Docker
```sh
docker build -t me/portfolio:latest .
docker run -p -d 80:80 me/portfolio:latest
```

### Without Docker
```sh
npm i
npm run build
node server.js
# Ctrl-c to exit
```
The website should then be accessible at http://127.0.0.1:80.

### Stop Docker Container
```sh
# Find the CONTAINER ID
docker ps
# Stop the process
docker stop <CONTAINER ID>
```

## In case of problems with ports

You can check if ports are available with :

### Linux & Mac
```sh
netstat -atnp TCP | grep "80"
```

### Windows
```sh
netstat -atnp TCP | find "80"
```

If these return a list, in the list there should **not** be any "*.80".

If these return nothing all good.

If port 80 isn't available check for port 8080 again in the same way, this one should be open.

And then change express config and docker run command accordingly :
- server.js (Express config)
```javascript
// ~ line 21
const port = 8080;
```
- Docker port forwarding (Replace 80:80 by 8080:80)

If 8080 isn't available then try 8081, 8082 and so on.

The wesite in this case should be accessible at http://localhost:8080 or remplace 8080 by the post that is open to you.
# Portfolio
This Angular app is my current portfolio frontend. It is not finished, a lot still needs to be done, it is a base for future updates.
This frontend may in the future be connected to an [API](https://github.com/IvoCostaCunha/portfolio-api.git) but for now I am trying to get the static part operational and looking good.

*(I might in the future rewrite the app with React instead since I find that Angular generates too much files.)*

I use [Express](https://github.com/expressjs/express.git) as a server.

# Requirements
- [NodeJS](https://nodejs.org/en) (Tested with Node@23.1.0)
- [Docker](https://www.docker.com/) (Tested with Docker@27.2.0) (Optional)

## Installation

I would suggest to do the installation via Docker, I think it is the easiest way since the installation isn't platform dependent. However, the installation can also be done by NPM and the app run by Node.

### With Node
```sh
npm i
npm run build
node server.js
# Ctrl-c to exit
```

### With Docker
```sh
docker build -t me/portfolio:latest .
docker run -d -p 80:80 me/portfolio:latest
```

### Stop Docker Container
```sh
# Find the CONTAINER ID
docker ps
# Stop the process
docker stop <CONTAINER ID>
```

The website should then be accessible at http://127.0.0.1:80 or http://locahost:80.

## If port 80 is unavailable

If the port 80 is unavailable the open ports can be tested individually with the netstat CLI utility available on Mac, Linux and Windows and a pattern matching command. Commands bellow should return a list of ports currently on use filtered by the pattern matching command.

### Linux & Mac
```sh
netstat -atnp TCP | grep "<port>"
```

### Windows
```sh
netstat -atnp TCP | FINDSTR "<port>"
```

I suggest testing port 8080 since usually unused.

Then the express config and docker run command have to be modified accordingly :

**server.js (Express config)**
```javascript
// ~ line 21
const port = <port>;
```

**Docker port forwarding** Replace 80:80 by `<port>`:80)

If 8080 isn't available 8081, 8082 and so on can be tried.

The website in this case should be accessible at http://localhost:`<port>` or http://127.0.0.1:`<port>`.

const http = require("http")
const https = require("https")
const fs = require('fs')
const path = require('path')

const express = require('express')
const compression = require('compression')
const expressRateLimit = require('express-rate-limit')

// const helmet = require('helmet')

let ssl = false
let options = {}

process.argv.forEach((val, index, array) => {
  if (val === "-ssl") {
    ssl = true
  }
})

const expressRateLimiter = expressRateLimit({
  windowMs: 6000,
  max: 20
})

const log = function(req, res, next) {
  const time = new Date().toUTCString()
  console.log("\n" + req.method + " request:")
  console.log("By: " + req.ip)
  console.log("To: " + req.url)
  console.log("At: " + time)
  next()
}

if (ssl) {
  fs.accessSync("private-key.pem", fs.constants.R_OK, (err) => {
    console.error("Private key is missing or cannot be read.")
  })

  fs.accessSync("domain-cert.pem", fs.constants.R_OK, (err) => {
    console.error("Domain certificate is missing or cannot be read.")
  })

  options = {
    key: fs.readFileSync("private-key.pem"),
    cert: fs.readFileSync("domain-cert.pem")
  }
}

const app = express()
const port = ssl ? 443 : 80

// app.use(helmet({
//   contentSecurityPolicy: {
//     directives: {
//       "default-src": ["'self'"],
//       "script-src-attr": ["'self'"],
//       "script-src": ["'self'"],
//       "style-src": ["'self'", "https://fonts.gstatic.com","http://www.w3.org/"]
//     },
//   },
// }))

app.use(compression())
app.use(expressRateLimiter)
app.use(log)
app.use(express.static(path.join(__dirname, '/dist/portfolio-app/browser')))

let server = ssl ? https.createServer(options, app) : http.createServer(app)

server.listen(port, () => {
  console.log(`Server online on: 192.168.0.1:${server.address().port}`);
  console.log(`Server listening : ${server.listening}`)
})

const express = require('express')
const compression = require('compression')
const expressRateLimit = require('express-rate-limit')
const path = require('path')
// const helmet = require('helmet')

let ssl = false

process.argv.forEach((val, index, array) => {
  if(val === "-ssl") {
    ssl = true
  }
})

const expressRateLimiter = expressRateLimit({
  windowMs: 6000,
  max: 20
})

const log = function (req, res, next) {
  const time = new Date().toUTCString()
  console.log("\n" + req.method + " request:")
  console.log("By: " + req.ip)
  console.log("To: " + req.url)
  console.log("At: " + time)
  next()
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

let server = app.listen(port, () => {
  console.log('Server online on port: ' + server.address().port);
})

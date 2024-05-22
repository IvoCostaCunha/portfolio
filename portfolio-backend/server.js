const express = require("express")
const favicon = require('serve-favicon')
const path = require('path')

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require("./app/doc/swagger");
const swaggerJSDoc = require("swagger-jsdoc")

const port = 8080
const app = express()

// favicon config
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Swagger config
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
require("./app/routes")(app)

app.listen(port, () => {  
    console.log('Server online on port: ' + port);
})
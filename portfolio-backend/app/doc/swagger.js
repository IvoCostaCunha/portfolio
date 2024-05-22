const swaggerJSDoc = require("swagger-jsdoc")

const options = {
  definition: {
    openapi: "3.0.1",
    failOnErrors: true,
    info: {
      title: "Portfolio-app back-end API",
      description: "API documentation of the portfolio-app backend API.",
      contact: {
        name: "Ivo Costa Cunha",
        email: "ivo.costacunha@icloud.com",
        url: "https://github.com/IvoCostaCunha/portfolio-app"
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:8080/",
        description: "Local server"
      },
      {
        url: "TODO",
        description: "Live server"
      },
    ]
  },
  // looks for configuration in specified directories
  apis: ["./app/routes/*.js"],
}


const swaggerSpecs = swaggerJSDoc(options)

module.exports = swaggerSpecs
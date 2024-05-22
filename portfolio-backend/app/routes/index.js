const projects = require("./projects")
const users = require("./users")
const data =  require("./data")

module.exports = (app) => {
    data(app),
    projects(app),
    users(app)
}
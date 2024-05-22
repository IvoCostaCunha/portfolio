// This contains user data requests and posts

let users = []

module.exports = (app) => {
    app.get("/users", (req, res) => {
        res.send(users)
    })
}
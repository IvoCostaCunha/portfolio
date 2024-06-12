// This contains user data requests and posts

    // Returns all users.json data or HTTP error code
    const getProjectsData = async () => {
        try {
            await fs.access("app/data/users.json", constants.R_OK | constants.W_OK)
            const data = await fs.readFile('app/data/users.json', "utf-8")
            return JSON.parse(data)
        } catch (error) {
            console.error(error)
            return 500
        }
    }

module.exports = (app) => {
    app.get("/users", async (req, res) => {
        logs.reqLog(req)
        const data = await getProjectsData()
        if (data != 500) {
          res.status(200).send({ "data": data })
        }
        else {
          res.status(500).send()
        }
      })

}
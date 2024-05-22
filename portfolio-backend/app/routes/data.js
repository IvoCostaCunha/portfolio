const { constants } = require("buffer")
const fs = require("fs").promises

const logs = require("../utils/logs")

// This contains website data requests and posts

// Returns all data from data.json or HTTP error code
const getData = async () => {
    try{
        fs.access("app/data/data.json", constants.W_OK | constants.R_OK)
        const data = await fs.readFile('app/data/data.json', "utf-8")
        return JSON.parse(data)
    } catch(error) {
        console.error(error)
        return 500
    }
}

module.exports = (app) => {
  // Request all data
  app.get("/data", async (req, res) => {
    logs.reqLog(req)
    const data = await getData()
    if(data != 500) {
      res.status(200).send({"data": data})
    }
    else {
      res.status(500).send()
    }
  })
}
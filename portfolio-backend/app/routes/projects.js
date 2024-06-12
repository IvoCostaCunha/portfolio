// This contains project data requests and posts
const fs = require("fs").promises
const { constants } = require("buffer")

const logs = require("../utils/logs")

/**
 * @swagger
 * components:
 *  schemas:
 *    Projects:
 *      type: array
 *      items:
 *        $ref: "#/components/schemas/Project"
 *    Project:
 *      type: object
 *      required:
 *        - name
 *        - year
 *        - tags
 *        - link
 *        - githubLink
 *        - details
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the project
 *        year:
 *          type: string
 *          description: Year at which I worked on the project
 *        tags:
 *          type: array[string]
 *          description: Tags associated with the project
 *        link:
 *         type: string
 *         description: Link to a live implementation of the project
 *        githubLink:
 *          type: string
 *          description: Link to the source code of the project
 *        details:
 *          type: string
 *          description: Detailed description of the project
 *      example:
 *       name: projectA
 *       year: "2024"
 *       tags: [Angular, NodeJS]
 *       link: example-link.com
 *       githubLink: github-link-example.git
 *       details: Detailed explanation of this project...
 */

// Returns all projects.json data or HTTP error code
const getProjectsData = async () => {
  try {
    await fs.access("app/data/projects.json", constants.R_OK | constants.W_OK)
    const data = await fs.readFile('app/data/projects.json', "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error(error)
    return 500
  }
}

// Returns project.json data of a project of name or HTTP error code
const getProjectData = async (name) => {
  try {
    await fs.access("app/data/projects.json", constants.R_OK | constants.W_OK)
    let data = await fs.readFile('app/data/projects.json', "utf-8")
    data = JSON.parse(data)
    for (let i in data) {
      if (data[i]["name"] === name) {
        return data[i]
      }
    }
    return 404
  } catch (error) {
    console.error(error)
    return 500
  }
}

module.exports = (app) => {

  // Request all projects

  /**
   * @swagger
   * tags:
   *  name: projects
   *  description: API managing projects data
   * /projects:
   *  get:
   *    summary: Gets all available projects
   *    tags: [projects]
   *    responses:
   *      200:
   *        description: Array of all available projects
   *        content: 
   *          application/json:
   *            schema:
   *              $ref: "#/components/schemas/Projects"
   *      500:
   *        description: Internal server error
   *        
   */
  app.get("/projects", async (req, res) => {
    logs.reqLog(req)
    const data = await getProjectsData()
    if (data != 500) {
      res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.status(200).send({ "data": data })
    }
    else {
      res.status(500).send()
    }
  })

  app.get("/project/:name", async (req, res) => {
    logs.reqLog(req)
    const data = await getProjectData(req.params.name)
    if (data != 500 && data != 404) {
      console.log(data)
      res.status(200).send({ "data": data })
    }
    else {
      res.status(500).send()
    }
  })
}
// * This file contains backend display pages requests and posts * //

apiDocsUrl = process.env.HOSTDEV

let html = `
<div>
    <h1>API backend for my portfolio app</h1>
    <p>See <a href='`
    + apiDocsUrl
    + `/api-docs'> API documentation</a> for this API endpoints.</p>
</div>
`

module.exports = (app) => {
    // Presentation page
    app.get("/", async (req, res) => {
        res.status(200).send(html)
     })
}
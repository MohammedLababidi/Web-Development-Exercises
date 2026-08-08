let router = require("./routes/router.js")
let http = require("http")
require("dotenv").config()
let logger = require("./modules/logger.js")

let port = process.env.PORT
let appName = process.env.APP_NAME
let env = process.env.NODE_ENV

let server = http.createServer((req, res) => {
    logger(req, res, () => {
        router(req, res)
    })
})


server.listen(port, () => {
    console.log(`server is running on port ${port}`)
    console.log(`app name: ${appName}`)
    console.log(`ENV: ${env}`)
})
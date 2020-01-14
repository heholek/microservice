const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const setupRoutes = require("./server/routes")

const PORT = process.env.PORT || 7101

const app = express()

console.log("aaaa")
app.use(bodyParser.json())
app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
)
setupRoutes(app)

app.use((err, req, res, next) => {
    return res.status(500).json({ message: err.message })
})
app.listen(PORT, () => {
    console.log(`listing services on ${PORT}`)
})

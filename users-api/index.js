const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")

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

app.listen(PORT, () => {
    console.log(`listing services on ${PORT}`)
})

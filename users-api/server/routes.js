const { User } = require("../sequelize/models")
const generateUUID = require("../helpers/generateUUID")
const hashPassword = require("../helpers/hashPassword")

const setupRoutes = app => {
    app.post("/users", async (req, res, next) => {
        if (!req.body.email || !req.body.password)
            return next(new Error("Invalid Body"))
        try {
            const newUSer = await User.create({
                email: req.body.email,
                id: generateUUID(),
                passwordHash: hashPassword(req.body.password)
            })
            return res.json(newUSer)
        } catch (error) {
            return next(error)
        }
    })
}

module.exports = setupRoutes

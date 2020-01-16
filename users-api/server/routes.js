const { addHours } = require("date-fns")
const { User, UserSession } = require("../sequelize/models")
const generateUUID = require("../helpers/generateUUID")
const hashPassword = require("../helpers/hashPassword")
const passwordCompareSync = require("../helpers/passwordCompareSync")

const USER_SESSION_EXPIRY_HOURS = 1

const setupRoutes = app => {
    app.post("/sessions", async (req, res, next) => {
        if (!req.body.email || !req.body.password)
            return next(new Error("Invalid Body"))
        try {
            const user = await User.findOne({
                attributes: {},
                where: {
                    email: req.body.email
                }
            })
            if (!user) return next(new Error("Invalid email"))
            if (!passwordCompareSync(req.body.password, user.passwordHash))
                return next(new Error("Invalid password"))

            const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS)
            const sessionToken = generateUUID()
            const userSession = await UserSession.create({
                expiresAt,
                id: sessionToken,
                userID: user.id
            })
            return res.json(userSession)
        } catch (error) {
            return next(error)
        }
    })

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

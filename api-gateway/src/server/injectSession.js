const UsersService = require("@src/adapters/UsersService")
const injectSession = async (req, res, next) => {
    if (req.cookies.userSessionId) {
        const userSession = await UsersService.fetchUserSession({
            sessionId: req.cookies.userSessionId
        })
        res.locals.userSession = userSession
    }
    next()
}
module.exports = injectSession

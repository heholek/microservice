const ListingService = require("../adapters/ListingService")
const UsersService = require("../adapters/UsersService")

module.exports = {
    Query: {
        async listings(obj, args, context, info) {
            return await ListingService.fetchAllListings()
        },
        async userSession(obj, args, context, info) {
            if (args.me !== true) throw new Error("Unsuported")
            return context.res.locals.userSession
        }
    },
    Mutation: {
        async createUser(obj, args, context, info) {
            return await UsersService.createUser(args)
        },
        async createUserSession(obj, args, context, info) {
            const userSession = await UsersService.createUserSession(args)
            context.res.cookie("userSessionId", userSession.id, {
                httpOnly: true
            })
            return userSession
        },
        async deleteUserSession(obj, args, context, info) {
            await UsersService.deleteUserSession(args)
            context.res.clearCookie("userSessionId")
            return true
        }
    },
    UserSession: {
        user: async userSession => {
            return await UsersService.fectherUser({
                userId: userSession.userID
            })
        }
    }
}

const ListingService = require("../adapters/ListingService")
const UsersService = require("../adapters/UsersService")

module.exports = {
    Query: {
        async listings(obj, args, context, info) {
            return await ListingService.fetchAllListings()
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
        }
    }
}

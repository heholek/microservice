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
        }
    }
}

const got = require("got")
const USERS_SERVICE_URI = "http://192.168.99.100:7101"

module.exports = class UsersService {
    static async createUser({ email, password }) {
        const body = await got
            .post(`${USERS_SERVICE_URI}/users`, {
                json: { email, password }
            })
            .json()
        return body
    }

    static async createUserSession({ email, password }) {
        const body = await got
            .post(`${USERS_SERVICE_URI}/sessions`, {
                json: { email, password }
            })
            .json()
        return body
    }
}

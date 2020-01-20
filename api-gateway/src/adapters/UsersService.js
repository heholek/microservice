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
    static async fectherUser({ userId }) {
        const body = await got
            .get(`${USERS_SERVICE_URI}/users/${userId}`)
            .json()
        return body
    }

    static async fetchUserSession({ sessionId }) {
        const body = await got
            .get(`${USERS_SERVICE_URI}/sessions/${sessionId}`)
            .json()
        return body
    }
}

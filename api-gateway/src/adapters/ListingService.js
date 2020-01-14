const got = require("got")
const LISTING_SERVICE_URL = "http://192.168.99.100:7100"

module.exports = class ListingService {
    static async fetchAllListings() {
        const body = await got.get(`${LISTING_SERVICE_URL}/listings`).json()
        return body
    }
}

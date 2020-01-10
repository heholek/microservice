const { Listing } = require("./../../sequelize/models")

module.exports = app => {
    app.get("/listings", async (req, res, next) => {
        const listings = await Listing.findAll()
        return res.json(listings)
    })
}

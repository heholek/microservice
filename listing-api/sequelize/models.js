const conn = require("./connection")
const { DataTypes, Model } = require("sequelize")

class Listing extends Model {}
Listing.init(
    {
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        }
    },
    {
        sequelize: conn,
        modelName: "listings"
    }
)

module.exports.Listing = Listing

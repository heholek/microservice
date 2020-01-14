const conn = require("./connection")
const { DataTypes, Model } = require("sequelize")

class User extends Model {}
User.init(
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        passwordHash: {
            allowNull: false,
            type: DataTypes.CHAR(64)
        }
    },
    {
        defaultScope: {
            rawAttributes: { exclude: ["passwordHash"] }
        },
        sequelize: conn,
        modelName: "users"
    }
)

class UserSession extends Model {}
UserSession.init(
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        userID: {
            allowNull: false,
            references: {
                key: "id",
                model: "users"
            },
            type: DataTypes.UUID
        },
        expiresAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    },
    {
        defaultScope: {
            rawAttributes: { exclude: ["passwordHash"] }
        },
        sequelize: conn,
        paranoid: false,
        updatedAt: false,
        modelName: "userSessions"
    }
)

module.exports.User = User
module.exports.UserSession = UserSession

const { Sequelize } = require("sequelize")

const sequelizeConnection = new Sequelize(process.env.DB_URI, {
    dialectOptions: {
        charset: "utf8",
        multipleStatement: true
    },
    logging: false
})

module.exports = sequelizeConnection

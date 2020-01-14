const bcrypt = require("bcryptjs")
module.exports = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

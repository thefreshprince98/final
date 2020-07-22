const bcrypt = require('bcrypt');
const Sequelize = require("sequelize");
const db = require("../database/db");
const saltRounds = 10;

const User = db.sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    }
},
    {
        timestamps: true
    });

User.hashPassword = (newPassword) => {
    return bcrypt.hash(newPassword, saltRounds)
};

User.prototype.verifyPassword = function (suppliedPassword) {
    return bcrypt.compare(suppliedPassword, this.password);
}

module.exports = User;
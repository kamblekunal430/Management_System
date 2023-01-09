const { STRING } = require("sequelize");
const { sequelize, Sequelize } = require("./index");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        designation: {
            type: Sequelize.STRING
        },
        dob: {
            type: Sequelize.STRING
        },
        companyId: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    })
    return User;
}
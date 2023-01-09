const { sequelize, Sequelize } = require("./index");

module.exports = (sequelize, Sequelize) => {

    const Company = sequelize.define("company", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        coordinates: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Company;
};
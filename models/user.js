const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require("./index.js");

module.exports = function(sequelize) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamp: false
    });
}
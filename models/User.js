const Sequelize = require('sequelize')
const sequelize = require('../database/DbConnection')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    userMail: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = User
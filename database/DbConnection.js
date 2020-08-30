const Sequelize = require('sequelize')

const sequelize = new Sequelize('ecommerceDb', 'root', 'mertcakmak2', {
    dialect:'mysql',
    host: 'localhost'
})

module.exports = sequelize
const mysql = require('mysql')

const sequelizeSync = {
    createDatabase() {
        return new Promise((resolve) => {
            var con = mysql.createConnection({ host: "localhost", user: "root", password: "mertcakmak2" });

            con.connect(function (err) {
                if (err) throw err;
                console.log("Connected!");
                con.query("CREATE DATABASE IF NOT EXISTS ecommerceDb", function (err, result) {
                    if (err) throw err;
                    console.log("Database created");
                    resolve(result)
                });
            });
        })
    },
    syncDatabase: function () {
        // const User = require('./models/User')
        const Product = require('../models/Product')
        const Category = require('../models/Category')

        Product.belongsTo(Category, {
            foreignKey: {
                allowNull: false
            }
        })
        Category.hasMany(Product)

        // User.sequelize.sync({force:true}).then(res => {
        //     console.log(res)
        // })
        Product.sequelize.sync().then(res => {   //sync({ force: true }) || sync({ alter: true })
            console.log(res)
        })
        Category.sequelize.sync().then(res => {  //sync({ force: true }) || sync({ alter: true })
            Category.count().then(count => {
                if (count === 0) {
                    Category.bulkCreate([
                        { name: 'Telefon', description: 'Telefon kategorisi' },
                        { name: 'Bilgisayar', description: 'Bilgisayar kategorisi' },
                        { name: 'Elektronik', description: 'Elektronik kategorisi' }
                    ])
                }
            })
            console.log(res)
        })
    }
}

module.exports = sequelizeSync
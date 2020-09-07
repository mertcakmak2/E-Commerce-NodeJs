const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }))

//Migrations
const sequelizeOrm = require('./database/DbSync')
sequelizeOrm.createDatabase().then((res) => {
    sequelizeOrm.syncDatabase()
})

//Api's
const product = require('./routes/productController')

//Routes
app.use('/product', product)

app.listen(5000, () => {
    console.log("Server starting")
})
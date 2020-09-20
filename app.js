const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }))

//Mongo
const mongoDb = require('./database/MongoDbConnect')
//Migrations
const database = require('./database/DbSync')
database.createDatabase().then((res) => {
    database.syncDatabase()
    mongoDb.connect()
})

//Api's
const product = require('./routes/productController')

//Routes
app.use('/product', product)

app.listen(5000, () => {
    console.log("Server starting")
})
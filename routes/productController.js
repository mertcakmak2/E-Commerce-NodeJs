const express = require('express')
const app = express.Router();

const Product = require('../models/Product');

app.get('/', (req, res) => {
    Product.findAll().then(products=>{
        res.send(products)
    })
})

app.post('/', (req, res) => {
    var product = {
        name: req.body.name,
        price: req.body.price,
        categoryId: req.body.categoryId
    }
    Product.create(product).then(product=>{
        res.send(product)
    }).catch(err=>{
        res.send(err)
    })
})

module.exports = app;
const express = require('express')
const app = express.Router();

const Product = require('../models/Product');

app.get('/', (req, res) => {
    Product.findAll({
        attributes: ['id', 'name'],
        where: { id: 1 }
    }).then(products => {    //id ve name colonları getirilir.
        res.send(products)
    })
})

app.post('/', (req, res) => {
    var product = {
        name: req.body.name,
        price: req.body.price,
        categoryId: req.body.categoryId
    }
    Product.create(product).then(product => {
        res.send(product)
    }).catch(err => {
        res.send(err)
    })
})

module.exports = app;
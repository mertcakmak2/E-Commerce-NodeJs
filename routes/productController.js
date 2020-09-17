const express = require('express')
const app = express.Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

//MAİN MODEL
const Product = require('../models/Product');

//JOIN MODEL
const Category = require('../models/Category');
const Company = require('../models/Company');

//CREATE PRODUCT 
app.post('/', (req, res) => {
    var product = {
        brand: req.body.brand,
        price: req.body.price,
        categoryId: req.body.categoryId,
        companyId: req.body.companyId,
        stock: req.body.stock,
        description: req.body.description,
    }
    Product.create(product).then(product => {
        res.send(product)
    }).catch(err => {
        res.send(err)
    })
})


//GET ALL PRODUCT
app.get('/', (req, res) => {
    Product.findAll({
        include: [Category, Company],
    }).then(products => {
        res.send(products)
    })
})

//GET PRODUCT BY ID
app.get('/:id', (req, res) => {
    Product.findAll({
        attributes: ['id', 'brand'],    //id ve name colonları getirilir.
        where: { id: req.params.id }    //parametre olarak gelen id'li ürünü getirir.
    }).then(products => {
        res.send(products)
    })
})

//GET PRODUCT BY CATEGORY ID
app.get('/category/:categoryId', (req, res) => {
    var categoryId = req.params.categoryId
    Product.findAll({
        where: { categoryId: categoryId },
        include: [Category]                 // Join atarak çekilen ürünlerin kategorisini de getiriyor
    }).then(products => {
        res.send(products)
    })
})

//GET PRODUCT BY COMPANY ID
app.get('/company/:companyId', (req, res) => {
    var companyId = req.params.companyId
    Product.findAll({
        where: { companyId: companyId },
        include: [Category, Company]        // Join atarak çekilen ürünlerin kategorisini de getiriyor
    }).then(products => {
        res.send(products)
    })
})

//GET PRODUCT BY İNCLUDES STRİNG
app.get('/search/:query', (req, res) => {
    var query = req.params.query
    Product.findAll({
        where: {
            description: {
                [Op.like]: '%' + query + '%'    //Gelen stringe göre ürün arama
            }
        },
    }).then(products => {
        res.send(products)
    })
})


//UPDATE PRODUCT
//DELETE PRODUCT
app.delete('/:id', (req, res) => {
    var productId = req.params.id
    res.send("deleete "+productId)
})


module.exports = app;
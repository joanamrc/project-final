const express = require('express')
const router = express.Router()

const getProducts = require('./handlers/getProducts')
router.get('/', getProducts)

const getProductsByCategory = require('./handlers/getProductsByCategory')
router.get('/category/:category', getProductsByCategory)

const getSingleProduct = require('./handlers/getSingleProduct')
router.get('/:title', getSingleProduct)


module.exports = router
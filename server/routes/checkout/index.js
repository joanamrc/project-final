const express = require('express')
const routerCH = express.Router()

const addProductToCart = require('./handlers/addProductToCart')
routerCH.get('/', addProductToCart)

module.exports = routerCH
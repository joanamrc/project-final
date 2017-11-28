const express = require ('express')
const app = express()
const data = require('./data/products.json')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
require('dotenv').load()

const routesProducts = require('./routes/products')
//const routesCheckout = require('./routes/checkout')

const {DB_URL} = process.env


mongoose.connect( DB_URL , { useMongoClient: true })

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/products', routesProducts)
//app.use('/chechout', routesCheckout)

//app.post('/checkout', addProductToCart)


app.listen(3005)

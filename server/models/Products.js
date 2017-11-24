const mongoose = require('mongoose')
const Schema = mongoose.Schema
const collection = 'products'

const ProductsSchema = new Schema({
    title: String,
    category: String,
    description: String,
    stock: Number,
    disponibility: Boolean,
    img_Path: String,
    price: String
}, { collection })

module.exports = mongoose.model('Products', ProductsSchema)
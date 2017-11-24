const Products = require('../../../models/Products')

function getProducts(req, res) {
  Products.find({})
    .then( products => {
    	console.log(products)
        	res.json(products) 
        })
}

module.exports = getProducts
const Products = require('../../../models/Products')

function getProductsByCategory(req, res) {
  console.log('getProductsByCategory')
  Products.find({category:'capufanda'})
    .then( products => {
    	console.log(products)
        	res.json(products) 
        })
}

module.exports = getProductsByCategory
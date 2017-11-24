const Products = require('../../../models/Products')

function getSingleProduct(req, res) {
  Products.find({title:'holograph'})
    .then( products => {
    	console.log(products)
        	res.json(products) 
        })
}

module.exports = getSingleProduct
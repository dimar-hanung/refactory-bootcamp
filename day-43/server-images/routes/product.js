const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router
  .get('/home', ProductController.home)
  .get('/', ProductController.getProducts)
  .get('/:id', ProductController.getProduct)
  .post('/', ProductController.saveProduct)
  .put('/:id', ProductController.updateProduct)
  .delete('/:id', ProductController.deleteProduct)

module.exports = router
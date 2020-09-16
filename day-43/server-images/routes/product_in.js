const express = require('express')
const router = express.Router()

const ProductInController = require('../controllers/ProductInController')

router
  .get('/home', ProductInController.home)
  .get('/', ProductInController.getAll)
  .get('/:id', ProductInController.get)
  .post('/', ProductInController.save)
  .put('/:id', ProductInController.update)
  .delete('/:id', ProductInController.delete)

module.exports = router
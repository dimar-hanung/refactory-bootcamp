const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router
  .get('/home', UserController.home)
  .get('/', UserController.getUsers)
  .get('/:id', UserController.getUser)
  .post('/', UserController.saveUser)
  .put('/:id', UserController.updateUser)
  .delete('/:id', UserController.deleteUser)

module.exports = router
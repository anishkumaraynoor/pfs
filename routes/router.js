






const express = require('express')
const userController = require('../controllers/userController')
const router = new express.Router()
router.post('/register', userController.register)
module.exports = router
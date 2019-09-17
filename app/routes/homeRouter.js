const express = require('express')
const home = require('../controllers/homeController')

const router = new express.Router()

router.get('', home.getHelloWorld)

module.exports = router
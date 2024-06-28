const express = require('express')
const router = express.Router()
const { createProduct,getProductos } = require('../controllers/productoController')

router.post('/',createProduct)
router.get('/',getProductos)

module.exports = router
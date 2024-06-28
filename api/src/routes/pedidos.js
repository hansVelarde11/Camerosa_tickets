const express = require('express')
const router = express.Router()
const { getPedidos,updatePedido,createPedido } = require('../controllers/pedidoController')

router.get('/', getPedidos)
router.post('/', createPedido)
router.put('/',updatePedido)

module.exports = router
const Pedido = require('../models/Pedido')
const Producto = require('../models/Producto')

//Obtener todos los pedidos
const getPedidos = async(req,res)=>{
    try {
        const pedidos = await Pedido.find().populate('productos.productId')
        res.json(pedidos)
    } catch (error) {
        res.status(500).json({message:'Error en obtencion de pedidos', error})
    }
}

const createPedido = async(req,res)=>{
    const { cliente, productos, destino, importe_total } = req.body

    try {
        //verificar ids de los productos
        const productosId = productos.map(producto=>producto.productId)
        const productosExistentes = await Producto.find({'_id': { $in: productIds }})

        if(productosExistentes.length !==productosId.length){
            return res.status(400).json({message:'Uno o más produtos no son válidos'})
        }

        const nuevoPedido = new Pedido({
            cliente,
            productos,
            destino,
            importe_total
        })

        const pedidoGuardado = await nuevoPedido.save()

        res.status(201).json(pedidoGuardado)
    } catch (error) {
        res.status(500).json({message: 'Error creando pedido', error})
    }
}

const updatePedido = async(req,res)=>{
    const { id } = req.params
    const { estado } = req.body

    try {
        const pedidoActualizado = await Pedido.findByIdAndUpdate(id,{estado},{new:true})
        if(!pedidoActualizado){
            return res.status(404).json({message:'Pedido no encontrado'})
        }
        res.json(pedidoActualizado)
    } catch (error) {
        res.status(500).json({message:'Error actualizando pedido',error})
    }
}

module.exports = {
    getPedidos,
    createPedido,
    updatePedido
}
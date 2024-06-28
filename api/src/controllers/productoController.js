const Producto = require('../models/Producto')

const createProduct = async(req,res)=>{
    const { nombre, precio, img_product } = req.body
    
    const nuevoProducto = await Producto({
        nombre,
        precio,
        img_product
    })

    try {
        const productoGuardado = await nuevoProducto.save()
        res.status(201).json(productoGuardado)
    } catch (error) {
        res.status(500).jsom({message:'Error creando producto',error})
    }
}

const getProductos = async(req,res)=>{
    try {
        const productos = await Producto.find()
        res.json(productos)
    } catch (error) {
        res.status(500).json({message: 'Error obteniendo productos', error})
    }
}

module.exports = {createProduct,getProductos}
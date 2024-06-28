const moongose = require('mongoose')

const productSchema = new moongose.Schema({
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    img_product:{
        type: [String],
        required: true
    }
},{
    timestamps:true
})

const Producto = moongose.model('Producto', productSchema)

module.exports = Producto
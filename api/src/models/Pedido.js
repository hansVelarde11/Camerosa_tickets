const moongose = require('mongoose')

const pedidoProductSchema = new moongose.Schema({
    productId:{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    talla:{
        type: String,
        enum:['34','35','36','37','38','39','40'],
        required: true
    },
    cantidad:{
        type: Number,
        required: trues
    }
})

const pedidoSchema = new moongose.Schema({
    cliente: {
        type: String,
        required: true
    },
    dni_cliente:{
        type: String,
        required: false
    },
    destino:{
        type: String,
        required: true
    },
    productos:[pedidoProductSchema],
    importe_total:{
        type: Number,
        required: true
    },
    estado:{
        type: String,
        enum: ['Esperando Separación','Separado','En fabricación','Esperando pago','Listo para envío','Enviado' ],
        default: 'Esperando Separación'
    }
},{
    timestamps: true
})

const Pedido = moongose.model('Pedido', pedidoSchema)

module.exports = Pedido
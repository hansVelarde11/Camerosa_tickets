const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./db')

const app = express()
const port = process.env.PORT

//middleware}
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

//conexcion a bd
connectDB()

//rutas
const pedidosRouter = require('./routes/pedidos')
app.use('/api/pedidos', pedidosRouter)

const productosRouter = require('./routes/productos')
app.use('/api/productos',productosRouter)

module.exports = app;
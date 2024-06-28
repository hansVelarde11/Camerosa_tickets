const moongose = require('mongoose')
require('dotenv').config()

const connectDB = async ()=>{
    try {
        const uri = process.env.MONGODB_URI
        await  moongose.connect(uri)
        console.log("Conexion exitosa con mongoDB");
    } catch (error) {
        console.error("Error en la conexion a mongoDB",  error);
    }
}

module.exports = connectDB
const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const PreciosSchema = new Schema({
    precioEstandar: {type: Number},
    precioPremium: {type:Number}, 
    valida: {type: Boolean, default: true}
})

module.exports = model('Precios', PreciosSchema)
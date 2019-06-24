const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const TarjetaSchema = new Schema({
    credito: { type: Number},
    numero: { type: String},
    usuario_id: { type: ObjectId}
})

module.exports = model('Tarjeta', TarjetaSchema)
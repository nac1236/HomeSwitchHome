const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const TarjetaSchema = new Schema({
    credito: { type: Number},
    numero: { type: String},
    usuario_id: { type: ObjectId},
    en_uso: {type: Boolean, default: false}
})

module.exports = model('Tarjeta', TarjetaSchema)
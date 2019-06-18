const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const PagoSchema = new Schema({
    monto: { type: Number },
    reserva_id: { type: ObjectId },
    usuario_id: { type: ObjectId },
    timestamp: { type: Date, default: Date.now }
})

module.exports = model('Pago', PagoSchema)
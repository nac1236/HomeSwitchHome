const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const PujaSchema = new Schema({
    monto_actual: { type: Number },
    subasta_id: { type: ObjectId },
    usuario_id: { type: ObjectId },
    timestamp: { type: Date, default: Date.now }
})

module.exports = model('Puja', PujaSchema)
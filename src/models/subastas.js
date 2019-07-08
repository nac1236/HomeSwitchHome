const { Schema, model } = require('mongoose')
const { ObjectId } = Schema
const Puja = require('./pujas')

const SubastaSchema = new Schema({
    monto_minimo: { type: Number },
    puja_id: { type: ObjectId},
    fecha_finalizacion: { type: Date },
    semana_reserva: {type: ObjectId }
})

module.exports = model('Subasta', SubastaSchema)
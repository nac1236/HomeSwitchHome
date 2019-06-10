const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const ReservaSchema = new Schema({
    propiedad_id: { type: ObjectId },
    semana_reserva: { type: Number },
    año: { type: Date},
    mes_creacion: { type:Date},
    mes_vencimiento: {type: Date}
})

module.exports = model('Reserva', ReservaSchema)
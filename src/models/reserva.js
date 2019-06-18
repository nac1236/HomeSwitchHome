const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const ReservaSchema = new Schema({
    semana_reserva: { type: ObjectId },
    mes_vencimiento: {type: Date},
    costo: { type: Number }, //el costo debe llegar desde algun formulario
    valida: { type: Boolean, default:true }
})

module.exports = model('Reserva', ReservaSchema)
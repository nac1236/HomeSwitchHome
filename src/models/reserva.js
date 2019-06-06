const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const ReservaSchema = new Schema({
    propiedad_id: { type: ObjectId },
    semana_reserva: { type: Number },
<<<<<<< HEAD
    año: { type: Date},
    mes_creacion: { type:Number},
=======
    mes_creacion: { type:Date},
>>>>>>> 37957a64f63871c10bcebe9d6d8dba8160f0221c
    mes_vencimiento: {type: Date}
})

module.exports = model('Reserva', ReservaSchema)
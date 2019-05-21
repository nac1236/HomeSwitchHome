const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const ReservaSchema = new Schema({
    propiedad_id: { type: ObjectId },
    //subasta_id: { type: ObjectId },
    semana_reserva: { type: Number }
})

module.exports = mongoose.model('Reserva', ReservaSchema)
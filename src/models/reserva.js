const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const ReservaSchema = new Schema({
    propiedad_id: { type: ObjectId },
    semana: { type: Date }
})

module.exports = mongoose.model('Reserva', ReservaSchema)
const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const HotsaleSchema = new Schema({
    reserva_id: { type: ObjectId },
    usuario_id: { type: ObjectId },
    costo: { type: Number }
})

module.exports = mongoose.model('Hotsale', HotsaleSchema)
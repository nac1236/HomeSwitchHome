const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const PublicacionSchema = new Schema({
    publicacion_id: { type: ObjectId },
    propiedad_id: {type: ObjectId},
    semana_para_reserva: { type: Number },
    mes_creacion: { type:Date},
    mes_vencimiento: {type: Date}
})

module.exports = mongoose.model('Publicacion', PublicacionSchema)
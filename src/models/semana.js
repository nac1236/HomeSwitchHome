const { Schema, model } = require('mongoose')
const { ObjectId } = Schema


const SemanaSchema = new Schema({
    fecha_inicio: { type: Date}, 
    fecha_fin: { type: Date },
    disponible: { type: Boolean, default:new Boolean(true)},
    propiedad_id: { type: ObjectId },
})

module.exports = model('Semana', SemanaSchema)
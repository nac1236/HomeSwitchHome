const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const UsuarioSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    nombre: { type: String, require: true},
    apellido: { type: String, require: true},
    creditos: { type: String, default: 2 },
    tipo: { type: String }, // "admin" o "usuario"
    tipo_suscripcion: {type: Boolean, default: false} //true = premium , false = estandar
})

module.exports = model('Usuario', UsuarioSchema)
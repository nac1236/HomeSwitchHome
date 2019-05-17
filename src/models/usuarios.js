const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const UsuarioSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    creditos: { type: String, default: 2 }
})

module.exports = mongoose.model('Usuario', UsuarioSchema)
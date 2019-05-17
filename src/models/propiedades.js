const mongoose = require('mongoose')
const { Schema } = mongoose

const PropiedadSchema = new Schema({
    nombre: { type: String, required: true },
    localidad: { type: String, required: true},
    provincia: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagenes: [{
        filename: { type: String }
    }],
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Propiedad', PropiedadSchema)
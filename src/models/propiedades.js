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
    costo: {type: Number},
    timestamp: { type: Date, default: Date.now },
    valida: { type:Boolean, default: new Boolean (true)}
})

module.exports = mongoose.model('Propiedad', PropiedadSchema)
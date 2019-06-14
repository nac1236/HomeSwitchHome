const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const ReservaSchema = new Schema({
    //este me parece que tampoco va propiedad_id: { type: ObjectId },
    semana_reserva: { type: Number }, //esto creo que ya no va
    //esto creo que tampoco año: { type: Date},
    mes_creacion: { type:Date},
    mes_vencimiento: {type: Date},
    costo: { type: Number }
    // el id de la semana es mejor ponerlo aca o en la relacion?
})

module.exports = model('Reserva', ReservaSchema)
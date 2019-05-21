const Publicacion = require ('../models/publicacion')
const Ṕropiedad = require ('../models/propiedades')
const Reserva = require ('../models/reserva') //Para poder validar que la publicacion esta en una fecha que no esta reservada

const ctrlPropiedad = {};

const validar_disponibilidad  = (fecha,propiedad_id) => {
    const reservas = Reserva.find(
        Reserva.propiedad_id = propiedad_id &&
        Reserva.semana_reserva = fecha)
    if(reservas){
        res.json('La propiedad tiene reservas para esa semana. ')
    }
}

ctrlPropiedad.all = (req,res) => {}

ctrlPropiedad.index = (req,res) => {}

ctrlPropiedad.create = (req,res) => {
    const publicacion = new Publicacion({
        propiedad_id: req.params.propiedad_id,
        semana_para_reserva: numero,
        mes_creacion: Date.today.month,
        mes_vencimiento: Date.today.month + 6
    })
    
}



module.exports = ctrlPropiedad
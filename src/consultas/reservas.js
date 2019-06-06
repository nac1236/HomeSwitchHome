const Ṕropiedad = require ('../models/propiedades')
const Reserva = require ('../models/reserva') //Para poder validar que la publicacion esta en una fecha que no esta reservada

const ctrlReserva = {}

const validar_disponibilidad  = reserva => {
    const reservas = Reserva.find(reserva.propiedad_id = Reseva.propiedad_id)
    if(reservas){
        const resultado = find(reserva.semana_reserva = reservas.semana_reserva)
        if(resultado) {
        res.json('La propiedad tiene reservas para esa semana. ')
        }
    }else{
        return true
    }
}

ctrlReserva.all = async (req,res) => {
    const reservas = await Reserva.find()
    res.json(reservas)
}

ctrlReserva.index = (req,res) => {
    const reserva = Reserva.findOne( ) //agregar id de propiedad para buscar?
    res.json(reserva)
}

ctrlReserva.create = async (req,res) => {
    const hoy = new Date
    const reserva = new Reserva({
        propiedad_id: req.body.propiedad_id,
        semana_reserva: req.body.semana_reserva,
        año: new Date,
        mes_creacion: hoy.getMonth() //,req.body.mes_creacion, El método getMonth() devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.
        //mes_vencimiento: (Date.month.today + 6)//req.body.mes_vencimiento
    })
    //if(validar_disponibilidad(reserva)){
        await reserva.save()
        res.json('Recibido')
    //}
}

module.exports = ctrlReserva
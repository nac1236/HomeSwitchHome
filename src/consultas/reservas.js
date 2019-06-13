const Propiedad = require ('../models/propiedades')
const Reserva = require ('../models/reserva') 

const ctrlReserva = {}

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
        //propiedad_id: req.body.propiedad_id,
        semana_reserva: req.body.semana_reserva,
        //año: new Date,
        mes_creacion: hoy.getMonth(), //El método getMonth() devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.
        mes_vencimiento: hoy.setMonth((new Date).getMonth() + 6),
        costo: req.body.costo
    }) // a continuacion tengo que cambiar el criterio de busqueda para saber que la semana no esta ocupada
    // Los pasos a seguir son:
    // A )
    // 1) cuando creo la reserva, preguntar si la semana esta disponible, si esta disponible ->
    // 2) guardo la fecha y esa va a ser la UNICA reserva que puede tener esa fecha

    // B ) 
    // 1) Devolver las semanas disponibles y que no tienen ninguna reserva asociada al front y a partor de ahi permitirle al usuario elegir nuevas semanas
    //const reservas = await Reserva.findOne({ propiedad_id : reserva.propiedad_id, semana_reserva : reserva.semana_reserva})
    // if(!reservas){
    //     await reserva.save()
    //      res.json('Recibido')
    // }else{
    //      res.json('La propiedad ya tiene reservas para esa semana')
    //  } esto es necesario cambiarlo
}

ctrlReserva.removeAll = (req,res) => {

        Reserva.remove({id : "5cf958b482d7320cb5f8f99b"})
        res.json('Hecho. Borrado terminado.')
}

module.exports = ctrlReserva
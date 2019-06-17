const Propiedad = require ('../models/propiedades')
const Reserva = require ('../models/reserva') 

const ctrlReserva = {}

ctrlReserva.all = async (req,res) => {
    const reservas = await Reserva.find()
    res.json(reservas)
}

ctrlReserva.index = (req,res) => {
    const reserva = Reserva.findOne( ) 
    res.json(reserva)
}

ctrlReserva.create = async (req,res) => {
    const hoy = new Date
    const reserva = new Reserva({
        semana_reserva: req.params.semanaId,
        //El método getMonth() devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.
        mes_vencimiento: hoy.setMonth(hoy.getMonth() + 6),
        costo: req.body.costo
    }) // a continuacion tengo que cambiar el criterio de busqueda para saber que la semana no esta ocupada
    // Los pasos a seguir son:
    // A )
    // 1) cuando creo la reserva, preguntar si la semana esta disponible, si esta disponible ->
    // 2) guardo la fecha y esa va a ser la UNICA reserva que puede tener esa fecha

    // B ) 
    // 1) Devolver las semanas disponibles y que no tienen ninguna reserva asociada al front y a partor de ahi permitirle al usuario elegir nuevas semanas
    const reservas = await Reserva.findOne({semana_reserva : reserva.semana_reserva})
    if(!reservas){
        await reserva.save()
         res.json('Recibido')
    }else{
         res.json('La propiedad ya tiene reservas para esa semana')
     } //esto es necesario cambiarlo
}

ctrlReserva.removeAll = (req,res) => {

        Reserva.deleteMany({ __v : 0})
        res.json('Hecho. Borrado terminado.')
}

module.exports = ctrlReserva
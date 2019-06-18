const Reserva = require ('../models/reserva')
const Semana = require('../models/semana') 
const ctrlSubasta = require('./subastas')
const Propiedad = require ('../models/propiedades')

const ctrlReserva = {}

ctrlReserva.all = async (req,res) => {
    const reservas = await Reserva.find()
    res.json(reservas)
}

ctrlReserva.index = (req,res) => {
    const reserva = Reserva.findOne( ) 
    res.json(reserva)
}

ctrlReserva.create = async (req,res) => { //para crear reservas, esto se debe hacer manualmente (por el momento)
    const hoy = new Date
    const reserva = new Reserva({
        semana_reserva: req.params.semanaId,
        //El método getMonth() devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.
        mes_vencimiento: hoy.setMonth(hoy.getMonth() + 6),
        //costo: req.body.costo //por ahora el costo se manda desde algun formulario
    }) // a continuacion tengo que cambiar el criterio de busqueda para saber que la semana no esta ocupada
    // Los pasos a seguir son:
    // A )
    // 1) cuando creo la reserva, preguntar si la semana esta disponible, si esta disponible ->
    // 2) guardo la fecha y esa va a ser la UNICA reserva que puede tener esa fecha

    // B ) 
    // 1) Devolver las semanas disponibles y que no tienen ninguna reserva asociada al front y a partor de ahi permitirle al usuario elegir nuevas semanas
    const semana = await Semana.findById({_id : reserva.semana_reserva})
    const propiedad = await Propiedad.findById({_id: semana.propiedad_id})
    reserva.costo = propiedad.costo
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

ctrlReserva.crearSubasta = async (req,res) =>{
    const semana = await Semana.findOne({propiedad_id: req.params.propiedad_id, fecha_inicio : req.body.fecha_inicio})
    //console.log(semana._id)
    if(semana.disponible){
        const reserva = await Reserva.findOne({semana_reserva: semana._id})
        //console.log(reserva._id)
        if(reserva.mes_vencimiento >=  new Date){ //esto quiere decir que si se vencio la reserva puedo crear una subasta
                //entonces poner reserva.valida a false //deberia existir una funcion que valide si todavia es valida o no. Eso podria agregarse en el cron
                //y crear subasta
            await Reserva.findOneAndUpdate(reserva._id, {
                valida : false
            })

        }
    }else{
            //la semana ya fue comprada por lo que no debe hacerse mas respecto de lo alquileres
        }
}

module.exports = ctrlReserva
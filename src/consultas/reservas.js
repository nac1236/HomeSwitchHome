    
const Reserva = require ('../models/reserva')
const Semana = require('../models/semana') 
const ctrlSubasta = require('./subastas')
const ctrlSemana = require('./semanas')
const Propiedad = require ('../models/propiedades')

const ctrlReserva = {}

ctrlReserva.marcarOcupada = async (reservaId,montoPago) => {
    const reserva = Reserva.findOne({_id: reservaId})
    if(reserva.costo >= montoPago){
        
        reserva = await Reserva.findByIdAndUpdate({_id: reservaId}, {valida: false})
        console.log(reserva._id)
        ctrlSemana.marcarOcupada(reserva.semana_reserva)
    }
    else{
        return false
    }
}

ctrlReserva.all = async (req,res) => {
    const reservas = await Reserva.find()
    res.json(reservas)
}

ctrlReserva.index = (req,res) => {
    const reserva = Reserva.findOne( ) 
    res.json(reserva)
}

reservasSemana = async (result) => {
    console.log(result._id)
}

ctrlReserva.dePropiedad = async (req,res) => {
    const s = await Semana.find({propiedad_id: req.params.propiedad_id, disponible: true})
    console.log(s[0]._id,s[0].disponible)
    if(!s){
        res.json('No hay semanas disponibles')
    }else{
        const reservas = await Reserva.find({valida:true})
        var temp =new Array
        var indice = 0
        for(var i = 0; i<s.length ; i++){
            for(var j = 0;j<reservas.length; j++){
                if(s[i].equals(reservas[j].semana_reserva)){
                    temp[indice] = reservas[j]
                    indice++
                }
            }
        } 
    }
    res.json(temp)
}

ctrlReserva.create = async (req) => { //para crear reservas, esto se debe hacer manualmente (por el momento)
    const hoy = new Date
    const reserva = new Reserva({
        semana_reserva: req,
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
    console.log(semana._id)
    const propiedad = await Propiedad.findById({_id: semana.propiedad_id})
    reserva.costo = propiedad.costo
    const reservas = await Reserva.findOne({semana_reserva : reserva.semana_reserva})
    if(!reservas){
        await reserva.save()
         //res.json('Recibido')
    //}else{
        // res.json('La propiedad ya tiene reservas para esa semana')
     } //esto es necesario cambiarlo
}

ctrlReserva.deleteAll = async (req,res) => {

        await Reserva.deleteMany({ __v : 0})
        res.json('Hecho. Borrado terminado.')
}


ctrlReserva.reservasVencidas = async (req,res) =>{ 
    const semanas = await Semana.find({propiedad_id: req.params.propiedad_id, disponible: true}) //para mostrar solo semanas disponibles
    var reservas 
    for(var i = 0; i<semanas.length ; i++){
        reservas = await Reserva.find({semana_reserva:semanas[i]._id})
    }
    var temp = new Array
    var indice = 0
    for(var j = 0; j<reservas.length ; j++){
        if(reservas[j].mes_vencimiento >= new Date){
            temp[indice] = reservas[j] 
        }   
    }
    if(!temp){
        res.json('No hay reservas vencidas aun.')
    }else{
        res.json(temp)
    }
}


ctrlReserva.crearSubasta = async (req,res) =>{ 
    const semana = await Semana.findOne({_id: req.params.semana_id, disponible: true}) //para mostrar solo semanas disponibles
    console.log(semana._id)
    if(!semana){
        res.json('La semana no esta disponible.')
    }else{
        const reserva = await Reserva.findOneAndUpdate({semana_reserva: semana._id}, {valida: false})
        //y crear subasta
        ctrlSubasta.create(reserva.semana_reserva, req.costo)
        res.json("Termino la reserva. Subasta creada con exito!")
    }
}

module.exports = ctrlReserva
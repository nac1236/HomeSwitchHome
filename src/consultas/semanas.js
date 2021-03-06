const Semana = require ('../models/semana')
const ctrlReserva = require ('./reservas')

const ctrlSemana = {}

ctrlSemana.marcarOcupada = async (semanaId) => {
    await Semana.findByIdAndUpdate({_id: semanaId}, {disponible : false})
}

ctrlSemana.all = async (req,res) => {
    const semanas = await Semana.find()
    res.json(semanas)
}

ctrlSemana.index = async (req,res) => {
    const semana = await Semana.findOne({_id : req.params.semana_id}) 
    res.json(semana)
}

ctrlSemana.allPropiedad = async (req,res) => {
    const semanas = await Semana.find({_id : req.params.propiedad_id}) 
    res.json(semanas)
}

ctrlSemana.deleteAll = async (req,res) => {
    await Semana.deleteMany({propiedad_id:req.params.propiedad_id}) 
    await Semana.deleteMany({disponible: true})
    res.json('Se borraron todas las semanas.')
}

ctrlSemana.create = async (p_id,inicio,fin) => {
    const semana = new Semana({
        fecha_inicio: new Date(inicio), 
        fecha_fin: new Date(fin),
        propiedad_id: p_id
    })
    const semanas = await Semana.findOne({fecha_inicio: semana.fecha_inicio, propiedad_id: semana.propiedad_id}) 
    if(!semanas){
    await semana.save()
    const s = await Semana.findOne({fecha_inicio: semana.fecha_inicio, propiedad_id: semana.propiedad_id}) 
    ctrlReserva.create(s._id)//crea reserva para esas semana
    }
}


ctrlSemana.crearMes = (propiedad_id,año,mes) => {
    const inicio = new Date(año,mes,1);
    const mesActual = inicio.getMonth()
    while(inicio.getDay()!= 0){
        inicio.setDate(inicio.getDate() + 1)
    }
    const fin = new Date(año,mes,1)
    fin.setDate(inicio.getDate() + 6)
    while(inicio.getMonth() == mesActual){
        ctrlSemana.create(propiedad_id,inicio,fin)
        inicio.setDate(inicio.getDate() + 7)
        fin.setDate(fin.getDate() + 7)
        console.log(inicio.toDateString())
        console.log(fin.toDateString())
    }
}

ctrlSemana.crear = (req,res) => {
    ctrlSemana.crearMes(req.params.propiedad_id,req.body.año,req.body.mes,req.body.dia)
    res.json('Hecho.')
}


module.exports = ctrlSemana
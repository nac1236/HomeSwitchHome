const Semana = require ('../models/semana')

const ctrlSemana = {}

ctrlSemana.all = async (req,res) => {
    const semanas = await Semana.find()
    res.json(semanas)
}

ctrlSemana.index = (req,res) => {
    const semana = Semana.findOne() 
    res.json(Semana)
}

// ctrlSemana.create = async (req,res) => {
//     const semana = new Semana({
//         fecha_inicio: new Date, 
//         fecha_fin: new Date,
//         propiedad_id: req.body.propiedad_id
//     })
//     //await semana.save() descomentar para crear semanas
//     res.json('Recibido')
// }

ctrlSemana.removeAll = (req,res) => {
}

ctrlSemana.create = async (p_id,inicio,fin) => {
    const semana = new Semana({
        fecha_inicio: inicio, 
        fecha_fin: fin,
        propiedad_id: p_id
    })
    //await semana.save() descomentar para crear semanas
    res.json('Recibido')
}


ctrlSemana.crearMes = (propiedad_id,año,mes,dia) => {
    const fecha = new Date(año,mes,dia)
    const mesActual = fecha.getMonth()
    //const dia = fecha.getDate()
    var inicio = fecha;
    if(inicio.getDate()!= 0){
        inicio = inicio.setDate(6 - inicio.getDate())
    }
    console.log(inicio.toDateString())
    var fin = new Date(fecha.getYear(),fecha.getMonth()).setDate(fecha.getDate() + 6)
    while(inicio.getMonth() = mesActual){
        ctrlSemana.create(propiedad_id,inicio,fin)
        inicio = fin.setDate(fin.getDate() + 1)
        fin = fin.setDate(fin.getDate() + 6)
    }
}

ctrlSemana.crear = (req,res) => {
    ctrlSemana.crearMes(req.params.propiedad_id,req.body.año,req.body.mes,req.body.dia)
    res.json('Hecho.')
}


module.exports = ctrlSemana
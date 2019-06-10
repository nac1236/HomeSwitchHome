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
}


ctrlSemana.crearMes = (propiedad_id,año,mes) => {
    var inicio = new Date(año,mes,1);
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
    }
}

ctrlSemana.crear = (req,res) => {
    ctrlSemana.crearMes(req.params.propiedad_id,req.body.año,req.body.mes,req.body.dia)
    res.json('Hecho.')
}


module.exports = ctrlSemana
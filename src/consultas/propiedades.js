const Propiedad = require ('../models/propiedades')
const ctrlSemana = require('./semanas') 
const Semana = require ('../models/semana')

const ctrl = {};

ctrl.all =  async (req,res) => { //muestra las propiedades validas y las que no estan validas
    const propiedades = await Propiedad.find();
    res.json(propiedades)
};

ctrl.allValidas =  async (req,res) => { //muestra solo las propiedades que son validas
    const propiedades = await Propiedad.find({valida: true});
    res.json(propiedades)
};

ctrl.index = async (req,res) => {
    const propiedad = await Propiedad.findById({_id : req.params.propiedad_id});
    res.json(propiedad);
}

ctrl.crearMes = async (req) => {
    const p = await Propiedad.findOne({nombre : req.body.nombre})
    const fecha = new Date
    fecha.setMonth(fecha.getMonth() + 7) //crea para dentro de 7 meses, las semanas disponibles
    ctrlSemana.crearMes(p._id,fecha.getFullYear(),fecha.getMonth())
}

ctrl.crearProp = async (req) => {
    const propiedad = new Propiedad ({
        nombre: req.body.nombre,
        localidad:req.body.localidad,
        provincia: req.body.provincia,
        descripcion: req.body.descripcion,
        costo: req.body.costo
    })
    await propiedad.save(); 
    
}

ctrl.create = async (req,res) => {
    ctrl.crearProp(req)
    ctrl.crearMes(req)
    res.json('Recibido')
}

ctrl.modifyNombre =  async (req,res) => {
    await Propiedad.findOneAndUpdate({_id: req.params.propiedad_id},{nombre : nombre})
    res.json('Recibido')
}

ctrl.modifyDescripcion =  async (req,res) => {
    await Propiedad.findOneAndUpdate({_id: req.params.propiedad_id},{descripcion: req.body.descripcion})
    res.json('Recibido')
}

ctrl.baja = async (req,res) => { 
    const semanas = await Semana.find({propiedad_id: req.params.propiedad_id ,disponible: false}) 
    if(semanas.length === 0){
        await Propiedad.findByIdAndUpdate({_id: req.params.propiedad_id},{valida: false})
        res.json('Propiedad dada de baja')
    } else{
        res.json('Esta propiedad no puede eliminarse porque tiene reservas pendientes.')
    }
}

ctrl.alta = async (req,res) => { 
        await Propiedad.findByIdAndUpdate({_id: req.params.propiedad_id},{valida: true})
        res.json('Propiedad dada de alta')
}

ctrl.removeAll = async (req,res) => {

    await Propiedad.deleteMany({ __v : 0})
    res.json('Hecho. Borrado de propiedades terminado.')
}


module.exports = ctrl
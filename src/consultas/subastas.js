const Subasta = require ('../models/subastas')
const Semana = require ('../models/semana')
const Reserva = require ('../models/reserva')

const ctrlSubasta = {};

ctrlSubasta.all = async (req,res) => {
    const subastas = await Subasta.find()
    res.json(subastas)
}

ctrlSubasta.index =  async (req,res) => {
    const subastas = await Subasta.findOne({puja_id: undefined});
    res.json(subastas)
};


//Este metodo sirve para crear subastas desde Postman
ctrlSubasta.create = async (req,res) => {
    const hoy = new Date
    const subasta = new Subasta ({
        monto_minimo: req.body.monto_minimo,
        fecha_finalizacion: hoy.setDate(hoy.getDate() + 3),
        semana_reserva: req.params.semana_id
    })
   
    const semana = await Semana.findOne({_id: subasta.semana_reserva})
    if (semana.disponible){
        const reservas = await Reserva.findOne({semana_reserva: semana._id})
        if(!reservas || !reservas.valida){    
            const subastas = await Subasta.findOne({semana_reserva: semana._id})
            if(!subastas){ 
                await subasta.save()
                res.json('Recibido. Subasta creada!')
            }else{
                res.json('Ya hay una subasta creada para esa semana. No se puede crear otra!')
            }
        } else {
            res.json('Todavia no pasaron los seis meses necesarios')
        }
    }else{
        res.json('La subasta no se puede crear porque esta reservada para ese semana.')
    }
}

//Este metodo es llamado desde reservas para pasar a ser una subasta
ctrlSubasta.create = async (semana_id,monto) => {
    const hoy = new Date
    const subasta = new Subasta ({
        monto_minimo: monto,
        fecha_finalizacion: hoy.setDate(hoy.getDate() + 3),
        semana_reserva: semana_id
    })
   
    const semana = await Semana.findOne({_id: subasta.semana_reserva})
    if (semana.disponible){
        const reservas = await Reserva.findOne({semana_reserva: semana._id})
        if(!reservas || !reservas.valida){    
            const subastas = await Subasta.findOne({semana_reserva: semana._id})
            if(!subastas){ 
                await subasta.save()
                res.json('Recibido. Subasta creada!')
            }else{
                res.json('Ya hay una subasta creada para esa semana. No se puede crear otra!')
            }
        } else {
            res.json('Todavia no pasaron los seis meses necesarios')
        }
    }else{
        res.json('La subasta no se puede crear porque esta reservada para ese semana.')
    }
}


ctrlSubasta.remove = async (req,res) => {
    const id = req.params.subasta_id;
    Subasta.deleteOne({_id: id})
    .exec()
    .then(result => {result.status(200).json(result);})
    .catch(err =>{console.log(err);
        res.status(500).json({error: err})});
}

ctrlSubasta.deleteAll = async (req,res) => {
    await Subasta.deleteMany({__v : 0 })
    res.json('Se borraron todas las subastas.')
}

module.exports = ctrlSubasta
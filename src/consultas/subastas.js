const Subasta = require ('../models/subastas')
const Semana = require ('../models/semana')
const Reserva = require ('../models/reserva')

const ctrlSubasta = {};

ctrlSubasta.all = async (req,res) => {
    const subastas = await Subasta.find()
    res.json(subastas)
}

ctrlSubasta.index =  async (req,res) => {
    const subastas = await Subasta.find();
    res.json(subastas)
};

ctrlSubasta.create = async (req,res) => {
    const hoy = new Date
    const subasta = new Subasta ({
        monto_minimo: req.body.monto_minimo,
        fecha_finalizacion: hoy.setDate(hoy.getDate() + 3),
        semana_reserva: req.params.semana_id
    })
    
    const semana = await Semana.findOne({_id: req.params.semana_id})
    if (true){ //la condicion deberia ser si la semana esta libre
        const reservas = await Reserva.findOne({semana_reserva: subasta.semana_reserva, valida : true})
        if(!reservas){    
            const subastas = await Subasta.findOne({semana_reserva: subasta.semana_reserva})
            if(!subastas){ 
                await subasta.save()
                res.json('Recibido. Subasta creada!')
            }
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

module.exports = ctrlSubasta
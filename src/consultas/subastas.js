const Subasta = require ('../models/subastas')
const Semana = require ('../models/semana')

const ctrlSubasta = {};

ctrlSubasta.index =  async (req,res) => {
    const subastas = await Subasta.find();
    res.json(subastas)
};

ctrlSubasta.create = async (req,res) => {
    const hoy = new Date
    const subasta = new Subasta ({
        monto_minimo: req.body.monto_minimo,
        puja_id:-1,
        //reserva_id: req.params.reserva_id,
        fecha_finalizacion: hoy.setDate(hoy.getDate() + 3),
        semana_reserva: req.body.semana_reserva
    })
   
    const subastas = Subasta.findOne({semana_reserva: subasta.semana_reserva})
    if(!subastas){ 
        await subasta.save()
        res.json('Recibido. Subasta creada!')
    }else{
        // const reserva = Reserva.find(
    //     Reserva.propiedad_id = subasta.propiedad_id &&
    //     Reserva.semana == subasta.semana_reserva)
    if(publicacion.mes_vencimiento > Date.today.month){
          //  res.json('La reserva no se puede crear porque todavia no se cumplio el plazo de reserva normal.')
    }else{
        //res.json('La reserva no se puede crear porque esta reservada para ese semana.')
        await subasta.save();
        
    }
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
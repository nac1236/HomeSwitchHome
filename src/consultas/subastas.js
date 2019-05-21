const Subasta = require ('../models/subastas')
const Reserva = require ('../models/reserva')

const ctrlSubasta = {};

ctrlSubasta.index =  async (req,res) => {
    //res.json('Hola mundo!');
    const subastas = await Subasta.find();
    res.json(subastas)
};

ctrlSubasta.create = async (req,res) => {
    const subasta = new Subasta ({
        monto_minimo: req.body.monto_minimo,
        puja_id:-1,
        reserva_id: req.params.reserva_id,
        fecha_creacion: Date.today,
        fecha_finalizacion: Date.tomorrow,
        semana_reserva: req.body.semana_reserva,
        propiedad_id: req.body.propiedad_id
    })
    const reserva = Reserva.find(
        Reserva.propiedad_id = subasta.propiedad_id &&
        Reserva.semana == subasta.semana_reserva)
    if(reserva){
        res.json('La reserva no se puede crear porque esta reservada para ese semana.')
    }/*else{
        const publicacion = Publicacion.find(Publicacion.publicacion_id = req.params.publicacion_id)
        if(publicacion.mes_vencimiento > Date.today.month){
            res.json('La reserva no se puede crear porque todavia no se cumplio el plazo de reserva normal.')
    }*/else{
        
        await subasta.save();
        res.json('Recibido. Subasta creada!')
    }
}


ctrlSubasta.remove = async (req,res) => {
    const id = req.params.subasta_id;
    Subasta.remove({_id: id})
    .exec()
    .then(result => {result.status(200).json(result);})
    .catch(err =>{console.log(err);
        res.status(500).json({error: err})});
}



module.exports = ctrlSubasta
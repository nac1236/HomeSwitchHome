const Subasta = require ('../models/subastas')

const ctrlSubasta = {};

ctrlSubasta.index =  async (req,res) => {
    //res.json('Hola mundo!');
    const subastas = await Subasta.find();
    res.json(subastas)
};

ctrlSubasta.create = async (req,res) => {
    const subastas = new Subasta ({
        monto_minimo: req.body.monto_minimo,
        //puja_id:req.body.puja_id,
        //en algun momento hay que obligar a que se establezca la fecha de finalizacion
        //y el id de la reserva
    })
    await subastas.save();
    res.json('Recibido. Subasta creada!')
}

ctrlSubasta.modify = (req,res) =>{

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
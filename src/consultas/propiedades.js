const Propiedad = require ('../models/propiedades')

const ctrl = {};

ctrl.index =  async (req,res) => {
    //res.json('Hola mundo!');
    const propiedades = await Propiedad.find();
    res.json(propiedades)
};

ctrl.create = async (req,res) => {
    const propiedades = new Propiedad ({
        nombre: req.body.nombre,
        localidad:req.body.localidad,
        provincia: req.body.provincia,
        descripcion: req.body.descripcion
    })
    await propiedades.save();
    res.json('Recibido')
}

ctrl.modify = {}

ctrl.remove = async (req,res) => {
    const id = req.params.propiedad_id;
    Propiedad.remove({_id: id})
    .exec()
    .then(result => {result.status(200).json(result);})
    .catch(err =>{console.log(err);
        res.status(500).json({error: err})});
}


module.exports = ctrl
 const Pujas = require ('../models/pujas')
 const Subasta = require('../models/subastas')
 
 ctrlPuja = {}

 ctrlPuja.all = async (req,res) => {
    const pujas = await Pujas.find()
    res.json(pujas)
 }

 ctrlPuja.create = async (req,res) => {
     const puja = new Pujas({
        monto_actual: req.body.monto_actual,
        subasta_id: req.body.subasta,
        usuario_id: req.body.usuario,
     })
     const subasta = await Subasta.findById({_id: puja.subasta_id})
     const pujas = await Pujas.find({_id: puja.subasta_id})
    //  this.findOne({ country_id: 10 }) // 'this' now refers to the Member class
    //  .sort('-score')
     if(pujas){
        const max = pujas.sort(pujas.monto_actual)
         if (puja.monto_actual > max){
            await puja.save() //ahora falta actualizar la subasta
            const p = await Pujas.findOne({subasta_id: puja.subasta_id,usuario_id: puja.usuario_id})    
            await Subasta.findOneAndUpdate({_id: puja.subasta_id}, {puja_id: p._id})
            res.json('Se creo el nuevo maximo')
         }
     }else{
        await puja.save()
        //actualizar la subasta subasta.puja_id
        res.json('Se creo la primer puja')
     }
 }

 //cuando se termine el tiempo de puja hay que setear la semana como ocupada si alguien la gano o solo dejar invalida la subasta
//recordar analizar si el usuario tiene fondos y creditos suficientes (para reservas y subastas)

ctrlPuja.deleteAll = async (req,res) => {
   await Puja.deleteMany({__v : 0 })
   res.json('Se borraron todas las pujas.')
}

 module.exports = ctrlPuja
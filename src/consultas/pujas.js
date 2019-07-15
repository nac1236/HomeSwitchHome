 const Pujas = require ('../models/pujas')
 const Subasta = require('../models/subastas')
 const Usuario = require ('../models/usuarios')
 
 ctrlPuja = {}

 ctrlPuja.all = async (req,res) => {
    const pujas = await Pujas.find()
    res.json(pujas)
 }

 ctrlPuja.create = async (req,res) => {
     const puja = new Pujas({
        monto_actual: req.body.monto_actual,
        subasta_id: req.params.subasta_id,
        usuario_id: req.params.usuario_id,
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

ctrlPuja.finalizar = async (subasta) =>{
   const pujas = await Pujas.find({subasta_id: subasta._id})
   pujas.sort(pujas.monto_actual)
   var ok = false
   var usuario
   var indice = 0
   while(!ok){
      usuario = await Usuario.findById({_id: pujas[indice].usuario_id})
      var tarjeta = await Tarjeta.find({usuario_id: usuario._id})
      if (tarjeta.credito >= pago.monto){
         if(usuario.creditos > 0){
            cobrar(usuario,tarjeta,pujas[indice].monto)
            marcarOcupada(reserva.id)
            await pago.save()
            //res.json('Pago realizado.')
            ok = true 
         }else{
            //res.json('No se tienen creditos suficientes.')
            ok = false
         }
      }else{
         //res.json('La tarjeta no tiene fondos suficientes.')
         ok = false
      }

      indice++
   }
} 


cobrar = async (usuario,tarjeta,monto) => {
   usuario.creditos = usuario.creditos - 1
   tarjeta.credito = tarjeta.credito - monto
   await Tarjeta.findByIdAndUpdate({_id:tarjeta._id}, {credito: tarjeta.credito})
   await Usuario.findByIdAndUpdate({_id: usuario._id}, {creditos : usuario.creditos})
}

marcarOcupada = async (subastaId) =>{
   const subasta = await Subasta.findByIdAndUpdate({_id: subastaId}, { valida: false})
   await Semana.findByIdAndUpdate({_id: subasta.semana_reserva}, {disponible: false})
}

ctrlPuja.deleteAll = async (req,res) => {
   await Puja.deleteMany({__v : 0 })
   res.json('Se borraron todas las pujas.')
}

 module.exports = ctrlPuja
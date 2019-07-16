const Tarjeta = require('../models/tarjetas')

const ctrlTarjeta = {}

ctrlTarjeta.all = async (req,res) => {
    const tarjetas = await Tarjeta.find()
    res.json(tarjetas)
}

ctrlTarjeta.create = async (req,res) => {
    const saldo = Math.random() * 10000000
    const tarjeta = new Tarjeta ({
        credito : saldo,
        numero : "1234567812345678",
        usuario_id : req.params.usuario_id,
        en_uso: true
    })

    await tarjeta.save()
    res.json("La tarjeta se creo correctamente.")
}

ctrlTarjeta.agregar = async (req,res) => {
    const saldo = Math.random() * 10000000
    const tarjeta = new Tarjeta ({
        credito : saldo,
        numero : "1234567812345678",
        usuario_id : req.params.usuario_id
    })
    await tarjeta.save()
    res.json("La tarjeta se creo correctamente.")
}

ctrlTarjeta.deUsuario = async (req,res) => {
    const tarjetas = await Tarjeta.find({usuario_id: req.params.usuario_id, en_uso: false})
    res.json(tarjetas)
}

ctrlTarjeta.elegirNueva = async (req,res) => {
    await Tarjeta.findOneAndUpdate({usuario_id: req.params.usuario_id, en_uso : true}, {en_uso:false})
    await Tarjeta.findOneAndUpdate({_id: req.params.tarjeta_id},{en_uso: true})
    res.json('La tarjeta se actualizo correctamente')
}

ctrlTarjeta.deleteAll = async (req,res) => {
    await Tarjeta.deleteMany({__v : 0 })
    res.json('Se borraron todas las tarjetas.')
}


module.exports = ctrlTarjeta
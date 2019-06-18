const Tarjeta = require('../models/tarjetas')

const ctrlTarjeta = {}

ctrlTarjeta.all = async (req,res) => {
    const tarjetas = await Tarjeta.find()
    res.json(tarjetas)
}

ctrlTarjeta.create = async (req,res) => {
    const saldo = Math.random() * 100000
    const tarjeta = new Tarjeta ({
        credito : saldo,
        numero : "1234 5678 1234 5678",
        usuario_id : req.params.usuario_id
    })

    await tarjeta.save()
    res.json("La tarjeta se creo correctamente.")
}

ctrlTarjeta.deleteAll = async (req,res) => {
    await Tarjeta.deleteMany({__v : 0 })
    res.json('Se borraron todas las tarjetas.')
}

module.exports = ctrlTarjeta
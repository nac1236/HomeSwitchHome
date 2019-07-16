const Precios = require ('../models/precioCuota')

ctrlPrecios = {}


ctrlPrecios.create = async (req,res) => {
    const precios = new Precios({
        precioEstandar: req.body.precioEstandar,
        precioPremium: req.body.precioPremium
    })
}

ctrlPrecios.modifyPrecioEstandar = async (req,res) => {
    await Precios.findAndUpdate({precioEstandar:req.body.precioEstandar})
    res.json('Recibido')
}

ctrlPrecios.modifyPrecioPremium = async (req,res) => {
    await Precios.findAndUpdate({precioPremium:req.body.precioPremium})
    res.json('Recibido')
}

module.exports = ctrlPrecios

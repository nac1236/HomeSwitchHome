const Pago = require('../models/pagos')
const Reserva = require('../models/reserva')
const ctrlReserva = require('./reservas')


const ctrlPago = {}

ctrlPago.all = async (req,res) => {
    const pagos = await Pago.find()
    res.json(pagos)
}

ctrlPago.create = async (req,res) => {
    const pago = new Pago({
        monto: req.body.monto,
        reserva_id: req.params.reserva_id,
        usuario_id: "5d05320cd0894e0a3bc191ce"//req.params.usuario_id, // el usuario queda fijo hasta que se pueda recuperar el id desde la sesion
    })

    const reserva = await Reserva.findById({_id: pago.reserva_id})
    if(reserva.valida){
        //tambien hay que validar que eñl usuario tenga creditos y dinero disponble para pagar en su tarjeta
        await pago.save()
        ctrlReserva.marcarOcupada(pago.reserva_id)
       //tendria que meter un callback 
        //para que la reserva se cambie sola y para que la semana se cambie su estado
        //sola tambien
        res.json('Pago realizado.')
    }
}

ctrlPago.deleteAll = async (req,res) => {
    await Pago.deleteMany({__v : 0 })
    res.json('Se borraron todas los pagos.')
}

module.exports = ctrlPago
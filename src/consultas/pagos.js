const Pago = require('../models/pagos')
const Reserva = require('../models/reserva')
const Semana = require ('../models/semana')
const ctrlReserva = require('./reservas')
const Usuario = require('../models/usuarios')
const Tarjeta = require('../models/tarjetas')


const ctrlPago = {}

ctrlPago.all = async (req,res) => {
    const pagos = await Pago.find()
    res.json(pagos)
}

ctrlPago.createPostman = async (req,res) => {
    const pago = new Pago({
        monto: req.body.monto,
        reserva_id: req.params.reserva_id,
        usuario_id: red.body.userId // el usuario queda fijo hasta que se pueda recuperar el id desde la sesion
    })

    const reserva = await Reserva.findById({_id: pago.reserva_id})
    const tarjeta = await Tarjeta.findOne({usuario_id: pago.usuario_id})
    const usuario = await Usuario.findById({_id: pago.usuario_id})
    if(reserva.valida === true){
        if (tarjeta.credito >= pago.monto){
            if(usuario.creditos > 0){
                cobrar(usuario,tarjeta,pago.monto)
                //await ctrlReserva.marcarOcupada(reserva.id,pago.monto) //voy a agregar los parametros para que afecte a la semana y a la reserva
                marcarOcupada(reserva.id)
                await pago.save()
                res.json('Pago realizado.')
        }else{
            res.json('No se tienen creditos suficientes.')
        }
        }else{
            res.json('La tarjeta no tiene fondos suficientes.')
        }
    }
}

ctrlPago.create = async (req,res) => {
    const pago = new Pago({
        reserva_id: req.params.reserva_id,
        usuario_id: req.params.usuario_id
    })

    const reserva = await Reserva.findById({_id: pago.reserva_id})
    const tarjeta = await Tarjeta.findOne({usuario_id: pago.usuario_id})
    const usuario = await Usuario.findById({_id: pago.usuario_id})
    if(reserva.valida === true){
        if (tarjeta.credito = reserva.costo){
            if(usuario.creditos > 0){
                cobrar(usuario,tarjeta,pago.monto)
                marcarOcupada(reserva.id)
                await pago.save()
                res.json('Pago realizado.')
        }else{
            res.json('No se tienen creditos suficientes.')
        }
        }else{
            res.json('La tarjeta no tiene fondos suficientes.')
        }
    }
}

cobrar = async (usuario,tarjeta,monto) => {
    usuario.creditos = usuario.creditos - 1
    tarjeta.credito = tarjeta.credito - monto
    await Tarjeta.findByIdAndUpdate({_id:tarjeta._id}, {credito: tarjeta.credito})
    await Usuario.findByIdAndUpdate({_id: usuario._id}, {creditos : usuario.creditos})
}

marcarOcupada = async (reservaId) =>{
    const reserva = await Reserva.findByIdAndUpdate({_id: reservaId}, { valida: false})
    await Semana.findByIdAndUpdate({_id: reserva.semana_reserva}, {disponible: false})
}

ctrlPago.deleteAll = async (req,res) => {
    await Pago.deleteMany({__v : 0 })
    res.json('Se borraron todas los pagos.')
}

module.exports = ctrlPago
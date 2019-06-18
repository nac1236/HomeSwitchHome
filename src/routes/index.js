const express = require('express')
const router = express.Router()

const ctrlProp = require('../consultas/propiedades')
const ctrlSubasta = require('../consultas/subastas')
const ctrlReserva = require ('../consultas/reservas')
const ctrlSemana = require('../consultas/semanas')
const ctrlUsuario = require('../consultas/usuarios')
const ctrlPuja = require ('../consultas/pujas')
const ctrlTarjeta = require ('../consultas/tarjetas')
const ctrlPago = require ('../consultas/pagos')

module.exports = app => {

    /* PROPIEDADES */

    router.get('/api/propiedades', ctrlProp.all)
    router.get('/api/propiedad/:propiedad_id', ctrlProp.index)
    router.post('/api/propiedad/',ctrlProp.create)
    router.put('/api/propiedad/:propiedad_id',ctrlProp.modify)
    router.put('/api/propiedad/alta/:propiedad_id', ctrlProp.alta)
    router.delete('/api/propiedad/:propiedad_id',ctrlProp.baja)
    router.delete('/api/propiedades/',ctrlProp.removeAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    /* SUBASTAS */

    router.get('/api/subastas', ctrlSubasta.all)
    router.get('/api/subasta',ctrlSubasta.index)
    router.post('/api/subasta/:semana_id',ctrlSubasta.create)
    router.delete('/api/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.remove)
    router.delete('/api/subastas/',ctrlSubasta.deleteAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    /* HOTSALES */

    router.get('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/api/propiedad/:propiedad_id/hotsale/')
    router.put('/api/propiedad/')
    router.delete('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')

    /* RESERVAS */

    router.get('/api/reservas/',ctrlReserva.all)
    router.get('/api/reserva/:propiedad_id/reserva',ctrlReserva.index)
    router.post('/api/reserva/:semanaId',ctrlReserva.create)
    router.delete('/api/reserva',ctrlReserva.deleteAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz
    router.get('/api/reserva/:propiedad_id',ctrlReserva.crearSubasta)

    /* SEMANAS */

    router.get('/api/semanas/', ctrlSemana.all)
    router.post('/api/semana/:propiedad_id',ctrlSemana.crear)
    router.delete('/api/semana/:propiedad_id',ctrlSemana.deleteAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    /* USUARIOS */
    
    router.get('/api/usuarios',ctrlUsuario.all)
    router.get('/api/usuario/',ctrlUsuario.index)
    router.post('/api/usuario',ctrlUsuario.create)

    /* PUJAS */

    router.get('/api/pujas', ctrlPuja.all)
    router.post('/api/puja',ctrlPuja.create)

    /* TARJETAS */

    router.get('/api/tarjetas',ctrlTarjeta.all)
    router.post('/api/tarjeta/:usuario_id',ctrlTarjeta.create)
    router.delete('/api/tarjetas',ctrlTarjeta.deleteAll) //sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    /* PAGOS */

    router.get('/api/pagos', ctrlPago.all)
    router.post('/api/pago/:reserva_id',ctrlPago.create)//el id del usuario deberia traermelo desde la session
    router.delete('/api/pagos/',ctrlPago.deleteAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    app.use(router)
}
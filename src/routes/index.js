const express = require('express')
const router = express.Router()

const ctrlProp = require('../consultas/propiedades')
const ctrlSubasta = require('../consultas/subastas')
const ctrlReserva = require ('../consultas/reservas')
const ctrlSemana = require('../consultas/semanas')
const ctrlUsuario = require('../consultas/usuarios')

module.exports = app => {

    /* PROPIEDADES */

    router.get('/api/propiedades', ctrlProp.all)
    router.get('/api/propiedad/:propiedad_id', ctrlProp.index)
    router.post('/api/propiedad/',ctrlProp.create)
    router.put('/api/propiedad/:propiedad_id',ctrlProp.modify)
    router.delete('/api/propiedad/:propiedad_id',ctrlProp.remove)

    /* SUBASTAS */

    router.get('/api/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.index)
    router.post('/api/propiedad/:propiedad_id/subasta/:reserva_id',ctrlSubasta.create)
    router.delete('/api/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.remove)

    /* HOTSALES */

    router.get('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/api/propiedad/:propiedad_id/hotsale/')
    router.put('/api/propiedad/')
    router.delete('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')

    /* RESERVAS */

    router.get('/api/reservas/',ctrlReserva.all)
    router.get('/api/reserva/:propiedad_id/reserva',ctrlReserva.index)
    router.post('/api/reserva',ctrlReserva.create)
    router.delete('/api/reserva',ctrlReserva.removeAll)

    /* SEMANAS */

    router.get('/api/semanas/', ctrlSemana.all)
    router.post('/api/semana/:propiedad_id',ctrlSemana.crear)

    /* USUARIOS */
    
    router.get('/api/usuarios',ctrlUsuario.all)
    router.get('/api/usuario/',ctrlUsuario.index)
    router.post('/api/usuario',ctrlUsuario.create)


    app.use(router)
}
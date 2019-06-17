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

    router.get('/api/subastas', ctrlSubasta.all)
    router.get('/api/subasta',ctrlSubasta.index)
    router.post('/api/subasta/:semana_id',ctrlSubasta.create) //cambios en el metodo create, revisar!!
    router.delete('/api/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.remove)

    /* HOTSALES */

    router.get('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/api/propiedad/:propiedad_id/hotsale/')
    router.put('/api/propiedad/')
    router.delete('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')

    /* RESERVAS */

    router.get('/api/reservas/',ctrlReserva.all)
    router.get('/api/reserva/:propiedad_id/reserva',ctrlReserva.index)
    router.post('/api/reserva/:semanaId',ctrlReserva.create)
    router.delete('/api/reserva',ctrlReserva.removeAll)
    router.get('/api/reserva/:propiedad_id',ctrlReserva.crearSubasta)

    /* SEMANAS */

    router.get('/api/semanas/', ctrlSemana.all)
    router.post('/api/semana/:propiedad_id',ctrlSemana.crear)
    router.delete('/api/semana/:propiedad_id',ctrlSemana.deleteAll)

    /* USUARIOS */
    
    router.get('/api/usuarios',ctrlUsuario.all)
    router.get('/api/usuario/',ctrlUsuario.index)
    router.post('/api/usuario',ctrlUsuario.create)


    app.use(router)
}
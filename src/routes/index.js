const express = require('express')
const router = express.Router()

const ctrl = require('../consultas/propiedades')
const ctrlSubasta = require('../consultas/subastas')
const ctrlReserva = require ('../consultas/reservas')

module.exports = app => {
/*
    router.get('/',(req,res) => {
       console.log('Hola mundo')
       res.json('Recibido!')
    });
*/
    /* PROPIEDADES */

    router.get('/api/propiedades', ctrl.all)
    router.get('/api/propiedad/:propiedad_id', ctrl.index)
    router.post('/api/propiedad/',ctrl.create)
    router.put('/api/propiedad/:propiedad_id',ctrl.modify)
    router.delete('/api/propiedad/:propiedad_id',ctrl.remove)

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

    router.get('/api/propiedad/:propiedad_id/reservas',ctrlReserva.all)
    router.get('/api/propiedad/:propiedad_id/reserva',ctrlReserva.index)
    router.post('/api/propiedad',ctrlReserva.create)
    //router.delete()


    app.use(router)
}
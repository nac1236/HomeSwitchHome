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
<<<<<<< HEAD

    router.get('/api/propiedades', ctrl.all)
    router.get('/api/propiedad/:propiedad_id', ctrl.index)
    router.post('/api/propiedad/',ctrl.create)
    router.put('/api/propiedad/:propiedad_id',ctrl.modify)
    router.delete('/api/propiedad/:propiedad_id',ctrl.remove)

    /* SUBASTAS */

    router.get('/api/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.index)
    router.post('/api/propiedad/:propiedad_id/subasta/:reserva_id',ctrlSubasta.create)
    router.delete('/api/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.remove)
=======

    router.get('/propiedades', ctrl.all)
    router.get('/propiedad/:propiedad_id', ctrl.index)
    router.post('/propiedad/',ctrl.create)
    router.put('/propiedad/:propiedad_id',ctrl.modify)
    router.delete('/propiedad/:propiedad_id',ctrl.remove)

    /* SUBASTAS */

    router.get('/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.index)
    router.post('/propiedad/:propiedad_id/subasta/:reserva_id',ctrlSubasta.create)
    router.delete('/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.remove)
>>>>>>> 37957a64f63871c10bcebe9d6d8dba8160f0221c

    /* HOTSALES */

    router.get('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/api/propiedad/:propiedad_id/hotsale/')
    router.put('/api/propiedad/')
    router.delete('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')

    /* RESERVAS */

<<<<<<< HEAD
    router.get('/api/reservas/',ctrlReserva.all)
    router.get('/api/reserva/:propiedad_id/reserva',ctrlReserva.index)
    router.post('/api/reserva',ctrlReserva.create)
=======
    /* RESERVAS */

    router.get('/propiedad/:propiedad_id/reservas',ctrlReserva.all)
    router.get('/propiedad/:propiedad_id/reserva',ctrlReserva.index)
    router.post('/propiedad',ctrlReserva.create)
>>>>>>> 37957a64f63871c10bcebe9d6d8dba8160f0221c
    //router.delete()


    app.use(router)
}
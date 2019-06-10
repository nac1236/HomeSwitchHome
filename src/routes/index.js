const express = require('express')
const router = express.Router()

const ctrlProp = require('../consultas/propiedades')
const ctrlSubasta = require('../consultas/subastas')
const ctrlReserva = require ('../consultas/reservas')
const ctrlSemana = require('../consultas/semanas')

module.exports = app => {
<<<<<<< HEAD
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
=======

    /* PROPIEDADES */

    router.get('/api/propiedades', ctrlProp.all)
    router.get('/api/propiedad/:propiedad_id', ctrlProp.index)
    router.post('/api/propiedad/',ctrlProp.create)
    router.put('/api/propiedad/:propiedad_id',ctrlProp.modify)
    router.delete('/api/propiedad/:propiedad_id',ctrlProp.remove)
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21

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

<<<<<<< HEAD
    router.get('/api/propiedad/:propiedad_id/reservas',ctrlReserva.all)
    router.get('/api/propiedad/:propiedad_id/reserva',ctrlReserva.index)
    router.post('/api/propiedad',ctrlReserva.create)
    //router.delete()
=======
    router.get('/api/reservas/',ctrlReserva.all)
    router.get('/api/reserva/:propiedad_id/reserva',ctrlReserva.index)
    router.post('/api/reserva',ctrlReserva.create)
    router.delete('/api/reserva',ctrlReserva.removeAll)

    /* Semanas */
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21

    router.get('/api/semanas/', ctrlSemana.all)
    router.post('/api/semana/:propiedad_id',ctrlSemana.crear)

    app.use(router)
}
const express = require('express')
const router = express.Router()

const ctrl = require('../consultas/propiedades')
const ctrlSubasta = require('../consultas/subastas')
const ctrlReserva = require ('../consultas/reservas')

module.exports = app => {

    router.get('/',(req,res) => {
       console.log('Hola mundo')
       res.json('Recibido!')
    });

    /* PROPIEDADES */

    router.get('/propiedades', ctrl.all)
    router.get('/propiedad/:propiedad_id', ctrl.index)
    router.post('/propiedad/',ctrl.create)
    router.put('/propiedad/:propiedad_id',ctrl.modify)
    router.delete('/propiedad/:propiedad_id',ctrl.remove)

    /* SUBASTAS */

    router.get('/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.index)
    router.post('/propiedad/:propiedad_id/subasta/:reserva_id',ctrlSubasta.create)
    router.delete('/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.remove)

    /* HOTSALES */

    router.get('/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/propiedad/:propiedad_id/hotsale/')
    router.put('/propiedad/')
    router.delete('/propiedad/:propiedad_id/hotsale/:hotsale_id')

    /* RESERVAS */

    router.get('/propiedad/:propiedad_id/reservas',ctrlReserva.all)
    router.get('/propiedad/:propiedad_id/reserva',ctrlReserva.index)
    router.post('/propiedad',ctrlReserva.create)
    //router.delete()


    app.use(router)
}
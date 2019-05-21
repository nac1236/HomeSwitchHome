const express = require('express')
const router = express.Router()

const ctrl = require('../consultas/propiedades')
const ctrlSubasta = require('../consultas/subastas')

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

    /* PUBLICACIONES */

    router.get('/publicaciones',ctrl.all)
    router.get('/publicacion/:propiedad_id',ctrl.index)
    router.post('/publicacion/:propiedad_id',ctrl.create)

    /* SUBASTAS */

    router.get('/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.index)
    router.post('/propiedad/:propiedad_id/subasta/:publicacion_id',ctrlSubasta.create)
    router.delete('/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.remove)

    /* HOTSALES */

    router.get('/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/propiedad/:propiedad_id/hotsale/')
    router.put('/propiedad/')
    router.delete('/propiedad/:propiedad_id/hotsale/:hotsale_id')

    /* RESERVAS */

    router.get('/propiedad/:propiedad_id/reservas')
    router.get('/propiedad/:propiedad_id/reserva')
    router.post('/propiedad')
    //router.delete()


    app.use(router)
}
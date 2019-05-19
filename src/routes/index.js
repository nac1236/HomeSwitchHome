const express = require('express')
const router = express.Router()

const ctrl = require('../consultas/propiedades')
const ctrlSubasta = require('../consultas/subastas')

module.exports = app => {

    router.get('/',(req,res) => {
        console.log('Hola mundo')
    });

    /* PROPIEDADES */

    router.get('/propiedad/:propiedad_id', ctrl.index)
    router.post('/propiedad/',ctrl.create)
    router.put('/propiedad/')
    router.delete('/propiedad/:propiedad_id',ctrl.remove)


    /* SUBASTAS */
    router.get('/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.index)
    router.post('/propiedad/:propiedad_id/subasta/',ctrlSubasta.create)
    router.put('/propiedad/',ctrlSubasta.modify)
    router.delete('/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.remove)

    /* HOTSALES */

    router.get('/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/propiedad/:propiedad_id/hotsale/')
    router.put('/propiedad/')
    router.delete('/propiedad/:propiedad_id/hotsale/:hotsale_id')


    app.use(router)
}
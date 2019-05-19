const express = require('express')
const router = express.Router()

const ctrl = require('../consultas/propiedades')

module.exports = app => {

    router.get('/',(req,res) => {
        console.log('Hola mundo')
    });

    /* PROPIEDADES */

    router.get('/propiedad/:propiedad_id')
    router.post('/propiedad/')
    router.put('/propiedad/')
    router.delete('/propiedad/:propiedad_id')


    /* SUBASTAS */
    router.get('/propiedad/:propiedad_id/subasta/:subasta_id')
    router.post('/propiedad/:propiedad_id/subasta/')
    router.put('/propiedad/')
    router.delete('/propiedad/:propiedad_id/subasta/:subasta_id')

    /* HOTSALES */

    router.get('/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/propiedad/:propiedad_id/hotsale/')
    router.put('/propiedad/')
    router.delete('/propiedad/:propiedad_id/hotsale/:hotsale_id')


    app.use(router)
}
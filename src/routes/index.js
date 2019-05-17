const express = require('express')
const router = express.Router()



module.exports = app => {

    router.get('/')

    /* PROPIEDADES */
    router.get('/propiedad/:propiedad_id')
    router.post('/propiedad/')
    router.delete('/propiedad/:propiedad_id')

    /* SUBASTAS */
    router.get('/propiedad/:propiedad_id/subasta/:subasta_id')
    router.post('/propiedad/:propiedad_id/subasta/')
    router.delete('/propiedad/:propiedad_id/subasta/:subasta_id')

    /* HOTSALES */

    router.get('/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/propiedad/:propiedad_id/hotsale/')
    router.delete('/propiedad/:propiedad_id/hotsale/:hotsale_id')


    app.use(router)
}
const morgan = require('morgan')
const multer = require('multer')
const express = require('express')

const errorHandler = require('errorhandler')

const routes = require('../routes/index')

module.exports = app => {

    // Configuracion
    app.set('port', process.env.PORT || 5000)

    // Middlewares
    app.use(morgan('dev'))
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())

    // Rutas
    routes(app)

    // Manejo de errores
    if ('development' === app.get('env')) {
        app.use(errorHandler)
    }

    return app

}
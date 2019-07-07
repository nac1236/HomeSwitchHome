const morgan = require('morgan')
const multer = require('multer')
const express = require('express')
const path = require('path')

const errorHandler = require('errorhandler')

const routes = require('../routes/index')

const session = require('../sessions/session')

module.exports = app => {

    // Configuracion
    app.set('port', process.env.PORT || 5000)

    // Middlewares
    app.use(morgan('dev'))

//temporal para guardar imagenes
    app.use(express.static('uploads'))

    app.use(express.urlencoded({extended: false}))
    app.use(express.json())


    //Sesiones
    session(app);

    // Rutas
    routes(app)

    // archivos estáticos
    app.use(express.static(path.join(__dirname, '../public')))

    // Manejo de errores
    if ('development' === app.get('env')) {
        app.use(errorHandler)
    }

    return app

}
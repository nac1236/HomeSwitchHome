const express = require('express')

const config = require('./server/config')

const cron = require ('./controllers/creadorSemanas')

// database
require('./database')

const app = config(express())
 

// starting the server
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'))
})
const express = require('express')

const config = require('./server/config')



// database
require('./database')

const app = config(express())
 
// cron
 require ('./controllers/creadorSemanas')

// starting the server
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'))
})
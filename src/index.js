const express = require('express')

const config = require('./server/config')


// database
require('./database')

const app = config(express())
 
// cron
<<<<<<< HEAD
 //require ('./controllers/creadorSemanas')
=======
//require ('./controllers/creadorSemanas')
>>>>>>> develop-nacho-alternativa

// starting the server
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'))
})
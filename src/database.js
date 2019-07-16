const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);

const { database } = require('./keys')

mongoose.connect(database.URI, { useNewUrlParser: true })
    .then(db => console.log('Conectado a la base de datos'))
    .catch(err => console.error(err))
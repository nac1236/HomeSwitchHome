const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);

const { database } = require('./keys')

mongoose.connect(database.URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
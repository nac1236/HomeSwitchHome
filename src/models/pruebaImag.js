const mongoose = require('mongoose')
const { Schema } = mongoose

var ImagenSchema = new Schema({
    img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Imagen', ImagenSchema)
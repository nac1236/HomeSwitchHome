const mongoose = require('mongoose')
const { Schema } = mongoose

var ImagenSchema = new Schema({
    img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Imagen', ImagenSchema)

/* Dos opciones para laburar las imagenes (por ahora) --> multer o npm images
*/
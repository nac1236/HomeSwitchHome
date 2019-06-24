var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var A = require('../models/pruebaImag')

const creaImg = {}

// img path
var imgPath = '/home/nacho/Descargas/imagen.jpeg';

// connect to mongo
//mongoose.connect('localhost', 'testing_storeImg');

// example schema
// var schema = new Schema({
//     img: { data: Buffer, contentType: String }
// });

// our model
//var A = mongoose.model('A', schema);

// mongoose.connection.on('open', function () {
//   console.error('mongo is open');

//   // empty the collection
//   A.remove(function (err) {
//     if (err) throw err;

//     console.error('removed old docs');

    // store an img in binary in mongo

creaImg.create = async (req,res) => {
    var a = new A;
    a.img.data = fs.readFileSync(imgPath);
    a.img.contentType = 'image/jpeg';
    await a.save()
    res.json('Recibido')
}

creaImg.all = async (req,res) => {
    const imagenes = await A.find()
    //res.setHeader('content-type', 'image/png');
    res.json(imagenes)
}

creaImg.index = async (req,res) => {
    const imagenes = await A.findOne({_id : req.params.imgId})
    res.setHeader('content-type', 'image/jpeg');
    res.json(imagenes.buffer)
}

creaImg.deleteAll = async (req,res) => {
    await A.deleteMany({__v : 0 })
    res.json('Se borraron todas las subastas.')
}

      // start a demo server
    //   var server = express.createServer();
    //   server.get('/', function (req, res, next) {
    //     A.findById(a, function (err, doc) {
    //       if (err) return next(err);
    //       res.contentType(doc.img.contentType);
    //       res.send(doc.img.data);
    //     });
    //   });

    //   server.on('close', function () {
    //     console.error('dropping db');
    //     mongoose.connection.db.dropDatabase(function () {
    //       console.error('closing db connection');
    //       mongoose.connection.close();
    //     });
    //   });

    //   server.listen(3333, function (err) {
    //     var address = server.address();
    //     console.error('server listening on http://%s:%d', address.address, address.port);
    //     console.error('press CTRL+C to exit');
    //   });

    //   process.on('SIGINT', function () {
    //     server.close();
    //   });
   //  });
 // });

//});

module.exports = creaImg
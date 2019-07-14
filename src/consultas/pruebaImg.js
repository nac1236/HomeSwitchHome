var A = require('../models/pruebaImg')
const multer = require('multer')
//const upload = multer({dest: 'uploads/'}) como lo define de otra forma comento este 


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1920 * 1024 * 16
    },
    fileFilter: fileFilter
  });
  



const creaImg = {}

// img path
var imgPath = '/home/nacho/Descargas/imagen.jpeg';

creaImg.create = async (req,res) => {
        console.log(req.file)
        const image = new A({
        productImage: req.file.path })
        await image.save()
        res.json('Recibido')
    }
    

creaImg.all = async (req,res) => {
    const imagenes = await A.find()
    //res.setHeader('content-type', 'image/png');
    res.json(imagenes)
}

creaImg.index = async (req,res) => {
    // const imagenes = await A.findOne({_id : req.params.imgId})
    // res.setHeader('content-type', 'image/jpeg');
    res.send({url: "http://localhost:5000/" + '2019-06-29T20:14:49.215Zimagen.jpeg'})
}

creaImg.deleteAll = async (req,res) => {
    await A.deleteMany({__v : 0 })
    res.json('Se borraron todas las subastas.')
}

module.exports = creaImg
const path = require('path')
const fs = require('fs-extra')

const { Propiedad } = require('../models/propiedades')

const ctrlImagenes = {};

ctrlImagenes.index = async (req, res) => {
    const image= await Propiedad.findOne({
        _id: {$regex: req.params.propiedad._id}
    })
    console.log(image)
    res.render('image', {image})
};

ctrlImagenes.create = (req, res) => {

    const saveImage = async () => {
        const propiedad = await Propiedad.find({$regex: req.params.nombre})
        
        const imageTempPath = req.file.path
        const ext = path.extname(req.file.originalname).toLowerCase()
        const imgName = `${propiedad.nombre, propiedad.localidad}`
        const targetPath = path.resolve(`src/public/upload/${propiedad.nombre, propiedad.localidad}/${imgName}.${ext}`)

        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
            await fs.rename(imageTempPath, targetPath)
            propiedad.imagenes.push({
                filename: imgName + ext
            })
            const imageSaved = await propiedad.save()
            res.send('works!')
        } else {
            await fs.unlink(imageTempPath)
            res.status(500).json({error: 'Sólo se permiten imágenes'})
        }
    
    }

    saveImage()

     

    
};

module.exports = ctrlImagenes
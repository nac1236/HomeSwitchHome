const express = require('express')
const router = express.Router()

const ctrlProp = require('../consultas/propiedades')
const ctrlSubasta = require('../consultas/subastas')
const ctrlReserva = require ('../consultas/reservas')
const ctrlSemana = require('../consultas/semanas')
const ctrlUsuario = require('../consultas/usuarios')
const ctrlPuja = require ('../consultas/pujas')
const ctrlTarjeta = require ('../consultas/tarjetas')
const ctrlPago = require ('../consultas/pagos')

const withAuth = require('../sessions/withAuth')

//prueba
const creaImg = require('../consultas/pruebaImg')

const multer = require('multer')
//const upload = multer({dest: 'uploads/'}) // para llamar a las funciones de multer
//la opcion dest va a intentar guardar las imagenes entrantes en la carpeta /uploads

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
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });


module.exports = app => {

    /* PROPIEDADES */

    router.get('/api/propiedades', ctrlProp.all)//muestra las propiedades validas y las que no estan validas
    router.get('/api/props/',ctrlProp.allValidas)//muestra solo las propiedades que son validas
    router.get('/api/propiedad/:propiedad_id', ctrlProp.index)
    router.post('/api/propiedad/',ctrlProp.create)
    router.put('/api/propiedad/nombre/:propiedad_id',ctrlProp.modifyNombre)
    router.put('/api/propiedad/desc/:propiedad_id',ctrlProp.modifyDescripcion)
    router.put('/api/propiedad/costo/:propiedad_id',ctrlProp.modifyCosto)
    router.put('/api/propiedad/alta/:propiedad_id', ctrlProp.alta)
    router.delete('/api/propiedad/:propiedad_id',ctrlProp.baja)
    router.delete('/api/propiedades/',ctrlProp.removeAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    /* SUBASTAS */

    router.get('/api/subastas', ctrlSubasta.all)
    router.get('/api/subasta',ctrlSubasta.index)
    router.get('/api/subastas/:propiedad_id',ctrlSubasta.dePropiedad)
    router.post('/api/subasta/:semana_id',ctrlSubasta.create)
    router.delete('/api/propiedad/:propiedad_id/subasta/:subasta_id',ctrlSubasta.remove)
    router.delete('/api/subastas/',ctrlSubasta.deleteAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz
    router.get('/api/subatas/:propiedad_id', ctrlSubasta.dePropiedad)
    router.put('/api/subasta/:subasta_id',ctrlSubasta.finalizar)

    /* HOTSALES */

    router.get('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')
    router.post('/api/propiedad/:propiedad_id/hotsale/')
    router.put('/api/propiedad/')
    router.delete('/api/propiedad/:propiedad_id/hotsale/:hotsale_id')

    /* RESERVAS */

    router.get('/api/reservas/',ctrlReserva.all)
    router.get('/api/reserva/:propiedad_id',ctrlReserva.dePropiedad)
    router.get('/api/reservas/vencidas/propiedad_id',ctrlReserva.reservasVencidas) //este metodo devuelve las reservas que ya estan vencidas
    router.post('/api/reserva/:semanaId',ctrlReserva.create)
    router.delete('/api/reserva',ctrlReserva.deleteAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz
    router.post('/api/reserva/baja/:semana_id',ctrlReserva.crearSubasta) //este metodo sirve para terminar una reserva y crear la subasta, deberia ser llamado por la pantalla de crear subasta

    /* SEMANAS */

    router.get('/api/semana/:semana_id',ctrlSemana.index)
    router.get('/api/semanas/', ctrlSemana.all)
    router.get('/api/semanas/:propiedad_id', ctrlSemana.allPropiedad)
    router.post('/api/semana/:propiedad_id',ctrlSemana.crear)
    router.delete('/api/semana/:propiedad_id',ctrlSemana.deleteAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    /* USUARIOS */
    
    router.get('/api/usuarios',ctrlUsuario.all)
    router.get('/api/usuario/',ctrlUsuario.index)
    router.post('/api/usuario',ctrlUsuario.create)
    router.post('/api/authenticate', ctrlUsuario.authenticate)
    router.put('/api/altausuario/:usuario_id',ctrlUsuario.altaPremium)
    router.put('/api/bajausuario/:usuario_id',ctrlUsuario.bajaPremium)

    /* PUJAS */

    router.get('/api/pujas', ctrlPuja.all)
    router.post('/api/puja/:subasta_id/:usuario_id',ctrlPuja.create)
    //router.delete()

    /* TARJETAS */

    router.get('/api/tarjetas',ctrlTarjeta.all)
    router.post('/api/tarjeta/:usuario_id',ctrlTarjeta.create)
    router.delete('/api/tarjetas',ctrlTarjeta.deleteAll) //sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    /* PAGOS */

    router.get('/api/pagos', ctrlPago.all)
    router.post('/api/pago/:reserva_id',ctrlPago.createPostman)//el id del usuario deberia traermelo desde la session
    router.post('/api/pago/:reserva_id/:usuario_id',ctrlPago.create)//Este es el que se debe llamar para pagar desde la aplicacion de react
    router.delete('/api/pagos/',ctrlPago.deleteAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    /* IMAGENES */

    router.get('/api/imagen', creaImg.all)// con este metodo recuperas el id de la imagen
    router.get('/api/imagen/:imgId',creaImg.index)// con este metodo recuperas la url de la imagen (que es lo que necesitas para mostrarla!!)
    router.post('/api/imagen/',upload.single('imagenPrueba'),creaImg.create)//el id del usuario deberia traermelo desde la session
    router.delete('/api/imagen/',creaImg.deleteAll)//sirve para borrar todo(como prueba), no llamar a este metodo desde la interfaz

    /* Tokens */

    router.get('/checkToken', withAuth)

    app.use(router)
}
const Usuario = require('../models/usuarios')
const jwt = require('jsonwebtoken');
const secret = 'hshsecreto'
const ctrlUsuario = {}

ctrlUsuario.all = async (req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

ctrlUsuario.index = async (req, res) => {
    const usuario = await Usuario.findOne({ email: req.body.email })
    res.json(usuario)
}

ctrlUsuario.porId = async (req, res) => {
    const usuario = await Usuario.findOne({ _id: req.params.usuario_id })
    res.json(usuario)
}

ctrlUsuario.create = async (req, res) => {
    const usuario = new Usuario({
        email: req.body.email,
        password: req.body.password,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        creditos: 20,
        tipo: req.body.tipo,
        tipo_suscripcion: req.body.tipo_suscripcion
    })
    const usuarios = await Usuario.findOne({ email: usuario.email })
    if (!usuarios) {
        await usuario.save() //sacar comentario para guardar usuarios
        res.json('usuario guardado')
    } else {
        res.json('EL usuario no se pudo guardar.')
    }
}

ctrlUsuario.authenticate = function (req, res) {
    const { email, password } = req.body;
    Usuario.findOne({ email }, function (err, user) {
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                    error: 'Internal error; please try again'
                });
        } else if (!user) {
            res.status(401)
                .json({
                    error: 'Email o contraseña incorrectos'
                });
        } else {
            user.isCorrectPassword(password, function (err, same) {
                if (err) {
                    res.status(500)
                        .json({
                            error: 'Internal error please try again'
                        });
                } else if (!same) {
                    res.status(401)
                        .json({
                            error: 'Incorrect email or password'
                        });
                } else {
                    // Issue token
                    const payload = { user };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, { httpOnly: true })
                        .sendStatus(200);
                }
            });
        }
    });
}

ctrlUsuario.altaPremium = async (req,res) => {
    await Usuario.findByIdAndUpdate({_id: req.params.usuario_id},{tipo_suscripcion : true})
    res.json('Recibido')
}

ctrlUsuario.bajaPremium = async (req,res) => {
    await Usuario.findByIdAndUpdate({_id: req.params.usuario_id},{tipo_suscripcion : false})
    res.json('Recibido')
}

ctrlUsuario.porFechaAscendente = async (req,res) => {
    var usuarios = await Usuario.find()
    usuarios.sort(function(a,b){
        a.timestamp - b.timestamp
    })
    res.json(usuarios)
}

ctrlUsuario.porFechaDescendente = async (req,res) => {
    var usuarios = await Usuario.find()
    usuarios.sort(function(a,b){
        a.timestamp - b.timestamp
    })
    res.json(usuarios)
}


ctrlUsuario.alfabeticamenteAscendente = async (req,res) => {
    var usuarios = await Usuario.find()
    usuarios.sort(function(a,b){
        if (a.apellido < b.apellido) {
          return -1;
        }
        if (a.apellido > b.apellido){
          return 1;
        }
        // a debe ser igual b
        return 0;
    })
    // var numbers = [4, 2, 5, 1, 3];
    // numbers.sort(function(a, b) {
    //     return a - b;
    // });
    // console.log(numbers);
    res.json(usuarios)
}

ctrlUsuario.alfabeticamenteDescendente = async (req,res) => {
    var usuarios = await Usuario.find()
    usuarios.sort(function(a,b){
        if (a.apellido > b.apellido) {
          return -1;
        }
        if (a.apellido < b.apellido){
          return 1;
        }
        // a debe ser igual b
        return 0;
    })
    res.json(usuarios)
}

ctrlUsuario.estandarPrimero= async (req,res) => {
    var usuarios = await Usuario.find()
    usuarios.sort(function(a,b){
        if (a.tipo_suscripcion > b.tipo_suscripcion) {
          return -1;
        }
        if (a.tipo_suscripcion < b.tipo_suscripcion){
          return 1;
        }
        // a debe ser igual b
        return 0;
    })
    res.json(usuarios)
}

ctrlUsuario.premiumPrimero= async (req,res) => {
    var usuarios = await Usuario.find()
    usuarios.sort(function(a,b){
        if (a.tipo_suscripcion > b.tipo_suscripcion) {
          return -1;
        }
        if (a.tipo_suscripcion < b.tipo_suscripcion){
          return 1;
        }
        // a debe ser igual b
        return 0;
    })
    res.json(usuarios)
}

ctrlUsuario.modifyNombre = async (req,res) =>{
    await Usuario.findByIdAndUpdate({_id: req.params.usuario_id},{nombre: req.body.nombre})
    res.json('Recibido')
}

ctrlUsuario.modifyApellido = async (req,res) =>{
    await Usuario.findByIdAndUpdate({_id: req.params.usuario_id},{apellido: req.body.apellido})
    res.json('Recibido')
}

ctrlUsuario.modifyPassword = async (req,res) =>{
    await Usuario.findByIdAndUpdate({_id: req.params.usuario_id},{password: req.body.password})
    res.json('Recibido')
}

ctrlUsuario.deleteAll = async (req,res) => {
    await Usuario.deleteMany({__v : 0 })
    res.json('Se borraron todas las subastas.')
}

module.exports = ctrlUsuario
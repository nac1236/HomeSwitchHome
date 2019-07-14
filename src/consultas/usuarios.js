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
    Usuario.findByIdAndUpdate({_id: req.params.usuario_id},{tipo_suscripcion : true})
    res.json('Recibido')
}

ctrlUsuario.bajaPremium = async (req,res) => {
    Usuario.findByIdAndUpdate({_id: req.params.usuario_id},{tipo_suscripcion : false})
    res.json('Recibido')
}

module.exports = ctrlUsuario
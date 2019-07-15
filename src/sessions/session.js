const express = require('express')
const session = require('express-session')
const router = express.Router()
const Usuario = require('../models/usuarios')

module.exports = app => {

    app.use(session({
        name: 'sid',
        resave: false, //por defecto viene en true
        saveUninitialized: false, //por defector viene en true
        secret: 'un string secreto',
        cookie: {
            sameSite: true,
            secure: true
        }
    }))

    // const redirectLogin = (req,res,next) => {
    //     if(!req.session.user_ID){
    //         res.json('No esta logueado, no puede acceder aqui!')
    //         //deberia hacer un res.redirect a /login
    //     }else{
    //         next()
    //     }
    // } //esta funcion es por ejemplo para que no entre a la pagina si no esta logueado
    
    router.get('/session', (req, res) => {
        res.json(req.session);
    }
    )

    router.post('/login', async (req, res) => {
        const usuario = await Usuario.findOne({
                email: req.body.email
        })
        //console.log(usuario._id)
        if (usuario) {
                req.session.userId = usuario._id;
                req.session.tipo = usuario.tipo_suscripcion
                res.json(req.session); // hasta aca se guarda el id que traje desde la bd
        }
        //res.redirect('/login')
    })

    app.post('/logout', (req, res) => {
        
        req.session.destroy(
            res.clearCookie('sid')
        )
    })


    app.use(router)
}
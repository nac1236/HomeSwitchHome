const express = require ('express')
const session = require('express-session')
const router = express.Router()



module.exports = app => {

    const usuarios = [  
        {id : 1345, email:'admin@gmail.com', password : '123456'  }
    ]

    const redirectLogin = (req,res,next) => {
        if(!req.session.user_ID){
            res.json('No esta logueado, no puede acceder aqui!')
            //deberia hacer un res.redirect a /login
        }else{
            next()
        }
    } //esta funcion es por ejemplo para que no entre a la pagina si no esta logueado

    router.get('/login', (req,res) => {
        res.json('recibido')
    })

    router.post('/login/:user_ID',(req,res) =>{
        const user_ID = req.params.user_ID
        if (user_ID){ //si se paso un user id como parametro
            const usuario = usuarios.find(
                usuario => usuario.id = user_ID
            )
        if(usuario){
            req.session.user_ID = usuario.id
            res.json('Usuario Admin logueado.')
        }
        } 
        res.redirect('/login')
    } )

    app.use(session({
        name: 'sid',
        resave: false, //por defecto viene en true
        saveUninitialized: false, //por defector viene en true
        secret: 'un string secreto',
        cookie:{
            sameSite: true,
            //secure: IN_PROD
        }
    }))

    app.use(router)
}
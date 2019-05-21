const express = require('express')
const session = require('express-session')
const router = express.Router()



module.exports = app => {

    app.use(session({
        name: 'sid',
        resave: false, //por defecto viene en true
        saveUninitialized: false, //por defector viene en true
        secret: 'un string secreto',
        cookie: {
            sameSite: true,
            //secure: IN_PROD
        }
    }))

    const usuarios = [
        { id: 1345, email: 'admin@gmail.com', password: '123456' }
    ]

    /*const redirectLogin = (req,res,next) => {
        if(!req.session.user_ID){
            res.json('No esta logueado, no puede acceder aqui!')
            //deberia hacer un res.redirect a /login
        }else{
            next()
        }
    } //esta funcion es por ejemplo para que no entre a la pagina si no esta logueado
    */
    router.get('/session', (req, res) => {
        res.json(req.session.userId);
    }
    )

    router.get('/login/:id', (req, res) => {
        if (req.params.id) { //si se paso un user id como parametro
            const usuario = usuarios.find(
                usuario => usuario.id = req.params.id
            )
            if (usuario) {
                req.session.userId = usuario.id;
                res.json(req.session.userId);
            }
        }
    })

    router.post('/login', (req, res) => {
        const user_ID = req.body.user_ID
        if (user_ID) { //si se paso un user id como parametro
            const usuario = usuarios.find(
                usuario => usuario.id = user_ID
            )
            if (usuario) {
                req.session.userId = usuario.id;
                res.json(req.session.userId);
            }
        }
        res.redirect('/login')
    })

    app.post('/logout', (req, res) => {
        // Assuming the request was authenticated in /login above,
        console.log(session.user);
        session({
            cookie: {
                path: '/',
                originalMaxAge: 7200000,
                httpOnly: true,
                secure: false,
                sameSite: true
            }
        })
        req.session.destroy(err => {
            // We can also clear out the cookie here. But even if we don't, the
            // session is already destroyed at this point, so either way, they
            // won't be able to authenticate with that same cookie again.
            res.clearCookie('sid')
            //res.redirect('/')
        })
    })




    app.use(router)
}
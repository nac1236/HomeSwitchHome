const express = require('express')
const session = require('express-session')
const router = express.Router()



module.exports = app => {

    app.use(session({
        name: 'sid',
        resave: false, //por defecto viene en true
        saveUninitialized: false, //por defector viene en true
        secret: 'un string secreto',
<<<<<<< HEAD
        cookie: {
=======
        cookie:{
>>>>>>> 37957a64f63871c10bcebe9d6d8dba8160f0221c
            sameSite: true,
            //secure: IN_PROD
        }
    }))

<<<<<<< HEAD
    const usuarios = [
        { id: 1345, email: 'admin@gmail.com', password: '123456' }
=======
    const usuarios = [  
        {id : 1345, email:'admin@gmail.com', password : '123456' }
>>>>>>> 37957a64f63871c10bcebe9d6d8dba8160f0221c
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
<<<<<<< HEAD
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
=======
    router.get('/session', (req,res)=>{
        res.json(session.userId);
    }
    )

    router.get('/login/:id', (req,res) => {
        if (req.params.id){ //si se paso un user id como parametro
            const usuario = usuarios.find(
                usuario => usuario.id = req.params.id
            )
        if(usuario){
            session.userId = usuario.id; 
            res.json(session.userId); 
        }
        } 
    })

    /*
    router.post('/login',(req,res) =>{ 
        const user_ID = req.body.user_ID
        if (user_ID){ //si se paso un user id como parametro
            const usuario = usuarios.find(
                usuario => usuario.id = user_ID
            )
        if(usuario){
            req.session.userId = usuario.id; 
            res.json(req.session.userId); 
        }
        } 
        //res.redirect('/login')
    } )*/

   app.get('/logout', (req, res) => { //podria cambiarlo por un get
        // Assuming the request was authenticated in /login above,
        //res.json(session.userId)
         console.log(session.userId);
          /*session ({
            cookie: {
              path: '/',
              originalMaxAge: 7200000,
              httpOnly: true,
              secure: false,
              sameSite: true
            }
          })*/
          req.session.destroy(err => {
>>>>>>> 37957a64f63871c10bcebe9d6d8dba8160f0221c
            // We can also clear out the cookie here. But even if we don't, the
            // session is already destroyed at this point, so either way, they
            // won't be able to authenticate with that same cookie again.
            res.clearCookie('sid')
<<<<<<< HEAD
            //res.redirect('/')
        })
    })


=======
            res.redirect('/')
          })
        })

   
>>>>>>> 37957a64f63871c10bcebe9d6d8dba8160f0221c


    app.use(router)
}
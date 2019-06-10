import React from 'react'
import ReactDOM from 'react-dom'

<<<<<<< HEAD
class LoginFormulario extends Component {



    render(){
        return (
            <div>
                <form>
                    
                </form>
            </div>
        )
    }
}
=======
class Login extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div>
                <div>
                   <button>Administrador</button>
                </div>
                <div>
                    <form>
                        <label>Correo electronico: <input type="email"></input></label>
                        <label>Contraseña: <input type="password"></input></label>
                        <button>Aceptar</button>
                        <Link>Registrase</Link>
                    </form>
                </div>
            </div>   
        )
    }
}
export default Login;
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21

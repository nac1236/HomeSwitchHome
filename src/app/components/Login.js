import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD

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
=======
import { Link } from 'react-router-dom'
>>>>>>> 1e0b525338469ffe6802db534c77cad34e35df1d
class Login extends Component {
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
                        <Link>Registrace</Link>
                    </form>
                </div>
            </div>   
        )
    }
}
export default Login;
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21

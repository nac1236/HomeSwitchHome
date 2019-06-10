import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
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
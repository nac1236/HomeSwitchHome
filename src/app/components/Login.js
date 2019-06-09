import React from 'react'
import ReactDOM from 'react-dom'

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
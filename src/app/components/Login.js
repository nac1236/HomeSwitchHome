import React from 'react'
import { Link } from 'react-router-dom'
import FormAgregarUser from '../registraruser'
class Login extends React.Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div>
                <div>
                    <nav className=" indigo accent-1">
                        <ul>
                           <li className="left hide-on-med-and-down"><Link to="/home">Admin</Link></li>
                           <li className="left hide-on-med-and-down"><input type="password" id="passadmin" maxLength="15"></input></li>
                           <li className="right hide-on-med-and-down"><Link to="/propiedades_disponibles">Iniciar sesion</Link> </li>
                           <li className="right hide-on-med-and-down"><input type="password" id="contraseña_login" size="12" rows="3"></input></li>
                           <li className="right hide-on-med-and-down"><label style={{color:'white'}}>Contraseña: </label></li>
                           <li className="right hide-on-med-and-down"><input type="email" id="correo" size="12" rows="3"></input></li>
                           <li className="right hide-on-med-and-down"><label style={{color:'white'}}>Correo electrónico: </label></li>
                        </ul>                         
                    </nav>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col s6 left">
                        <img src="file://.../logos/HSH-Complete.svg"/>   
                    </div>
                    <div className="col s6 right">
                       <FormAgregarUser/>
                    </div>
                </div>
                </div>
            </div>   
        )
    }
}
export default Login

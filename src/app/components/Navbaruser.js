import React, {Component} from 'react'
import { Link } from 'react-router-dom'
class Navbaruser extends Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div>
                <div>
                    <nav className=" indigo accent-1">
                        <ul>
                           <li className="left hide-on-med-and-down"><Link to="/propiedades_disponibles"><i className="Medium material-icons">home</i></Link></li>
                           <li className="right hide-on-med-and-down"><Link to="/">Cerrar sesion</Link></li>
                           <li className="right hide-on-med-and-down"><Link to="/perfil">Perfil</Link></li>
                        </ul>                         
                    </nav>
                </div>
            </div>   
        )
    }
}
export default Navbaruser
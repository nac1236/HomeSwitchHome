import React, {Component} from 'react'
import { Link } from 'react-router-dom'
class Navbarpremium extends Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div>
                <div>
                    <nav className=" indigo accent-1">
                        <ul>
                           <li className="left hide-on-med-and-down"><Link to="/propiedades_disponibles">Propiedades</Link></li>
                           <li className="left hide-on-med-and-down"><Link to="/subastas_disponibles">Subastas</Link></li>
                           <li className="right hide-on-med-and-down"><Link to="/">Cerra sesion</Link></li>
                           <li className="right hide-on-med-and-down"><Link to="/perfil">Perfil</Link></li>
                        </ul>                         
                    </nav>
                </div>
            </div>   
        )
    }
}
export default Navbarpremium
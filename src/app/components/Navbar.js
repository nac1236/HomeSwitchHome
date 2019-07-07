import React from 'react'
import ReactDOM from 'react-dom'
// import logo from '../../../logos/HSH-Logo.svg'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    constructor() {
        super()
        this.state = {
            isLogged: 'false'
        }
    }

    render() {
        return (
            <div className="navbar">
                <header>
                    <div className="nav">
                        <nav className=" indigo accent-1">
                            <div>
                                <ul>
                                    <li className="left hide-on-med-and-down"><Link to="/home">HomeSwitchHome</Link></li>
                                    {this.state.isLogged &&
                                     <li><Link to="/propiedades">Propiedades</Link></li>
                                    }
                                    {this.state.isLogged &&
                                     <li className="left hide-on-med-and-down"><Link to="/subastas">Subastas</Link></li>
                                    }
                                    {/*this.state.isLogged &&
                                     <li className="left hide-on-med-and-down"><Link to="/hotsales">Hotsales</Link></li>
                                    */}
                                     {this.state.isLogged &&
                                    <li className="left hide-on-med-and-down"><Link to="/usuarios">Usuarios</Link></li>
                                    }
                                     {this.state.isLogged &&
                                     <li className="right hide-on-med-and-down"><Link to="/">Cerrar sesion</Link></li>
                                   }
                                </ul>
                            </div>
                       </nav>
                    </div>
                </header>
            </div>
        )
    }
}
export default Navbar

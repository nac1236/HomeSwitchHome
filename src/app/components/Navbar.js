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
<<<<<<< HEAD
                                <ul className="left hide-on-med-and-down">
                                    <li><Link to="/">HomeSwitchHome</Link></li>
=======
                                <ul>
                                    <li className="left hide-on-med-and-down"><Link to="/home">HomeSwitchHome</Link></li>
>>>>>>> bef70f10707a62af18d2ad53a01c26fac1048cc7
                                    {this.state.isLogged &&
                                    <li><Link to="/propiedades">Propiedades</Link></li>
                                    }
                                    {this.state.isLogged &&
                                    <li className="left hide-on-med-and-down"><Link to="/subastas">Subastas</Link></li>
                                   }
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

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
<<<<<<< HEAD
                    <div className="imagen">

                    </div>

                    <div className="titulo">
                        <Link to="/">HomeSwitchHome</Link>
                    </div>
                    {this.state.isLogged &&

                        <div className="titulo2">
                            <Link to="/propiedades">Propiedades</Link>
                        </div>
                    }
=======
                    <div className="nav">
                        <nav className=" indigo accent-1">
                            <div>
                                <ul class="left hide-on-med-and-down">
                                    <li><Link to="/">HomeSwitchHome</Link></li>
                                    {this.state.isLogged &&
                                    <li><Link to="/propiedades">Propiedades</Link></li>
                                    }
                                    {this.state.isLogged &&
                                    <li><Link to="/subastas">Subastas</Link></li>
                                   }
                                     {this.state.isLogged &&
                                    <li><Link to="/usuarios">Usuarios</Link></li>
                                   }
                                </ul>
                            </div>
                       </nav>
                    </div>
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21
                </header>
            </div>
        )
    }
}
<<<<<<< HEAD

export default Navbar
=======
export default Navbar
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21

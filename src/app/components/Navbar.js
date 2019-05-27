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
                                <ul class="left hide-on-med-and-down">
                                    <li><Link to="/">HomeSwitchHome</Link></li>
                                    {this.state.isLogged &&
                                    <li><Link to="/propiedades">Propiedades</Link></li>
                                    }
                                    {this.state.isLogged &&
                                    <li><Link to="/subastas">Subastas</Link></li>
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

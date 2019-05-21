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
                </header>
            </div>
        )
    }
}

export default Navbar
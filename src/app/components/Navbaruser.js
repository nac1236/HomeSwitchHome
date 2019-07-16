import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cookie from 'react-cookies';

class Navbaruser extends Component {
    constructor(props) {
        super(props)
    }

    handleLogout(e) {
        e.preventDefault()
        /*fetch('/api/logout')
            .then(res => res.json)
    .then(() => {*/
        cookie.remove('tipo', { path: '/' })
        cookie.remove('userId', { path: '/' })
        this.props.history.push("/")
        /*})*/
    }

    render() {
        return (
            <div>
                <div>
                    <nav className=" indigo accent-1">
                        <ul>
                            <li className="left hide-on-med-and-down"><Link to="/propiedades_disponibles"><i className="Medium material-icons">home</i></Link></li>
                            <li className="right hide-on-med-and-down"><Link to="/." onClick={(e) => this.handleLogout(e)}>Cerrar sesion</Link> </li>
                            <li className="right hide-on-med-and-down"><Link to="/perfil">Perfil</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Navbaruser
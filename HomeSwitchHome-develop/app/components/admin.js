import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import FormAgregarPropiedad from '../agregarprop'
import FormAgregarSubasta from '../agregarsub'

class AdminForm extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/propiedades/agregar">Agregar Subasta</Link>
                    </li>
                    <li>
                        <Link to="/subasta">Agregar Propiedad</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default AdminForm
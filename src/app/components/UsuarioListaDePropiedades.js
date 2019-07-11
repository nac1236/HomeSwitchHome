import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UsuarioListaDePropiedades extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.propiedades.map(propiedad => {
                        return (
                            <div>
                                <div key={propiedad.id}>
                                    <div className="col s4">
                                        <div className="card">
                                                <div className="card-image waves-effect waves-block waves-light">                    
                                                    <img src="https://www.guatemala.com/fotos/201710/Lugares-turisticos-de-Guatemala-que-debes-conocer-segun-NatGeo-2-885x500.jpg" />
                                                </div>
                                                <Link to={`${this.props.match.path}/${propiedad._id}`}>{propiedad.nombre}, {propiedad.localidad}, {propiedad.provincia}</Link>                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}



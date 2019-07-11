import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class VistaDeListaPropiedades extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.propiedades.map((propiedad, index) => {
                        return (
                            <div>
                                <div key={index}>
                                    <div className="col s4">
                                        <div className="card">
                                            <div className="card-image waves-effect waves-block waves-light">
                                                <img className="activator" src="https://www.guatemala.com/fotos/201710/Lugares-turisticos-de-Guatemala-que-debes-conocer-segun-NatGeo-2-885x500.jpg" />
                                            </div>
                                            <div className="card-content ">
                                                <Link to={`${this.props.match.path}/${propiedad._id}`}> {propiedad.nombre}, {propiedad.localidad} </Link>
                                                <span className="card-title activator grey-text text-darken-4"><i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal">
                                                <span className="card-title grey-text text-darken-4">{propiedad.nombre}<i className="material-icons right">close</i></span>
                                                <p>Localidad: {propiedad.localidad}</p>
                                                <p>Provincia: {propiedad.provincia}</p>
                                                <p>Descripcion: {propiedad.descripcion}</p>
                                                <p>Precio por semana: ${propiedad.costo}</p>
                                                <div className="col s6">
                                                    <input type="date" step="7" min="2019-04-14"></input>
                                                    <button className=" indigo accent-1 left">Reservar</button>
                                                </div>
                                            </div>
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



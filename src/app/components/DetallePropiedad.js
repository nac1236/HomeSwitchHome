import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
export default class DetallePropiedad extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            propiedad: {}
        }
    }

    componentDidMount(){
        fetch(`/api/propiedad/${this.props.match.params.propId}`)
            .then(res => res.json())
            .then(data => {
                this.setState({propiedad: data})
            })
            console.log(this.state)
    }

    render() {
        return (
            <div>
              <h3 align="center">{this.state.propiedad.nombre}</h3>
              <div className="row">
                 <div className="col s3">
                     <h5>Localidad: {this.state.propiedad.localidad}</h5>
                 </div>
                 <div className="col s4">
                     <h5>Provincia: {this.state.propiedad.provincia}</h5>
                 </div>
              </div>
              <div className="row">
                  <div className="col s6">
                      <h5>Descripción: {this.state.propiedad.descripcion}</h5>
                  </div>
              </div>
              <div className="row">
                  <div className="col s4">
                      <h4>Precio por semana: ${this.state.propiedad.costo}</h4>
                  </div>
              </div>
              <div className="row">
                  <div className="col s2">
                      <Link to={`${'/reservas_disponibles'}/${this.props.match.params.propId}`}  className="indigo accent-1 left" style={{ color: 'black' }} type="button">Reservas disponibles</Link>
                  </div>                      
              </div>
              <div className="row">
                  <div className="col s2">
                      <Link to={`${'/subastas_disponibles'}/${this.props.match.params.propId}`}  className="indigo accent-1 left" style={{ color: 'black' }} type="button">Subastas activas</Link>
                  </div>
              </div>
            </div>
        )
    }
} 

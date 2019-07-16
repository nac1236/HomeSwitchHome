import React, { Component } from 'react'
export default class Presentacion extends Component {
    constructor() {
        super();
        this.state={
            propiedad:{}
        }
    }
fetchPropiedad() {
 /*fetch('/api/propiedad/5d2d50d7abbfda21206d6f39')
     .then(res => res.json())
     .then(data => {
     this.setState({ propiedad: data }),
     console.log(this.state)
 })*/
}
componentDidMount(){
    this.fetchPropiedad()
}
    render() {
        return (
          <div  className="container">  
            <div className="card card green lighten-4">
                <div>
                    <div className="card-image waves-effect waves-block waves-light">                    
                      <img src="https://www.guatemala.com/fotos/201710/Lugares-turisticos-de-Guatemala-que-debes-conocer-segun-NatGeo-2-885x500.jpg" />
                    </div>
                    <h5>{this.state.propiedad.nombre}</h5>
                    <p>Localidad: {this.state.propiedad.localidad}</p>
                    <p>Provincia: {this.state.propiedad.provincia}</p>
                    <p>Descripcion: {this.state.propiedad.descripcion}</p>
                    <p>Precio por semana ${this.state.propiedad.costo}</p>
                </div>
            </div>
        </div>
        )
    }
}
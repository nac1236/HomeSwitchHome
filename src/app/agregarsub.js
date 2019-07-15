import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ListaDeReserva from './components/listaDeReserva';
class FormAgregarSubasta extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
        propiedad: {},
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
      <div >
        <nav className="indigo accent-1">
          <ul>
            <li className="right hide-on-med-and-down"><Link to="/">Cerrar sesion</Link></li>
          </ul>
        </nav>
        <h5 align="center">Agregar subasta</h5>
          <div className="container">
            <div className="row">
            <form onSubmit={this.addSubasta}>
            <div className="row">
              <div className="col s5">
                <p>Nombre: {this.state.propiedad.nombre}</p>
              </div>
            </div>
            <div className="row">
              <div className="col s5">
                <p>Localidad: {this.state.propiedad.localidad}</p>
              </div>
            </div>
            <div className="row">
              <div className="col s5">
                <p>Provincia: {this.state.propiedad.provincia}</p>
              </div>
            </div>
            <ListaDeReserva {...props} propiedad={this.state.propiedad}/>
            <div className="row">
              <div className="col s2">
               <Link to="/propiedades" className="indigo accent-1 left" style={{ color: 'black' }} type="button">
                      Volver atrás
               </Link>
            </div>
            </div>
            </form>
            </div>
          </div>
        </div>
    )
  }
}
export default FormAgregarSubasta;
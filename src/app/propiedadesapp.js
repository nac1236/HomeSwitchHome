import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ListaDePropiedades from './components/listaDePropiedades'


class ActionPropiedad extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: 'false'
  }
    
  }
  
  
  render() {
    return (
      <div className="pantalla1">
        <div className="header">
          <header>
            <div className="titulo2">
              <h5 align="center">Propiedades</h5>
            </div>
          </header>
        </div>
        <div className="listarPropiedades">
          <ListaDePropiedades>
          </ListaDePropiedades>
        </div>
        <div className="botones">
        <div className="agregar propiedad">
           <button className=" indigo accent-1 left" > 
               Agregar
            <i class="tiny material-icons">add</i>
           </button>
          </div>
          <div className="modificar propiedad">
            <button className=" indigo accent-1 left" >
              Modificar
            <i class="tiny material-icons">edit</i>
                </button>
          </div>
          <div className="eliminar">
            <button className=" indigo accent-1 left">
              Eliminar
              <i class="tiny material-icons">delete</i>
                </button>
          </div>
          <div className="subastar">
            <button className=" indigo accent-1 left">
              Subastar
             <i class="tiny material-icons">assessment</i>
                </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ActionPropiedad;
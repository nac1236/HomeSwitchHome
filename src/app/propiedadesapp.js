import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ListaDePropiedades from './components/listaDePropiedades'
import { Link } from 'react-router-dom'
class ActionPropiedad extends Component {
  constructor() {
    super();
}
render() {
  return(
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
        <Link to="/propiedades/agregar" className="indigo accent-1 left" style={{ color: 'black' }} type="button">
              Agregar
         </Link>  
      </div>
      </div>
    )}
}
export default ActionPropiedad;
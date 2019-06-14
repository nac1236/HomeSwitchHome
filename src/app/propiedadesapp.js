import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ListaDePropiedades from './components/listaDePropiedades'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar';
class ActionPropiedad extends Component {
  constructor() {
    super();
}
render() {
  return(
      <div>   
        <Navbar/>     
        <div>
          <header>
            <div>
              <h5 align="center">Propiedades</h5>
            </div>
          </header>
        </div>
        <div className="listarPropiedades">
          <ListaDePropiedades>
          </ListaDePropiedades>
        </div>
        <div>
        <Link to="agregar_propiedad" className="indigo accent-1 left" style={{ color: 'black' }} type="button">
              Agregar
        </Link>  
      </div>
      </div>
    )}
}
export default ActionPropiedad;
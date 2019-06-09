import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ListaDePropiedades from './components/listaDePropiedades'
import {Route, Link } from 'react-router-dom'
import FormAgregarPropiedad from './agregarprop';
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
        <button className=" indigo accent-1 left">
        <Link  style={{color: 'black'}} to="/propiedades/agregar" > 
               Agregar
        </Link>
        </button>    
        <button className=" indigo accent-1 left" >
        <Link  style={{color: 'black'}} to="/propiedades/modificar" > 
               Modificar
        </Link>
        </button>
          <div className="eliminar">
            <button className=" indigo accent-1 left">
              Eliminar               
            </button>
          </div>
          <div className="subastar">
            <button className=" indigo accent-1 left">
              Subastar
            </button>
          </div>
          <Route path="/propiedades/agregar" component={FormAgregarPropiedad}></Route>
        </div>
      </div>
    )}
}
export default ActionPropiedad;
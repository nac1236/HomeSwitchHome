<<<<<<< HEAD
import React, { Component } from 'react';
import ListaDePropiedades from './components/listaDePropiedades';

class ActionPropiedad extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pantalla1">
        <div className="header">
          <header>
            <div className="navegacion">
              <nav>
                <div className="ul">
                  <ul>
                    <div className="lisubastas">
                      <li><a href="./subastas.js">Subastas</a></li>
                    </div>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="titulo2">
              <h2>Propiedades</h2>
            </div>
          </header>
        </div>
        <div className="listarPropiedades">
          <ListaDePropiedades>
          </ListaDePropiedades>
        </div>
        <div className="botones">
          <div className="agregar propiedad">
            <button>
              Agregar
                </button>
          </div>
          <div className="modificar propiedad">
            <button>
              Modificar
                </button>
          </div>
          <div className="eliminar">
            <button>
              Eliminar
                </button>
          </div>
          <div className="subastar">
            <button>
              Subastar
                </button>
          </div>
        </div>
      </div>
    )
  }
}
=======
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
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21
export default ActionPropiedad;
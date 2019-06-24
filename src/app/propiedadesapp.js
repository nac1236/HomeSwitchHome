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
        <div className="row">
           <div className="col s4 ">
             <label>Filtrar por nombre:</label>
             <input type="text" size="15"></input>
            </div>
            <div className="col s4">
              <label>Filtrar por localidad:</label>
              <input type="text" size="15"></input>
            </div>
            <div className="col s4">
               <Link to="agregar_propiedad" className="indigo accent-1 left" style={{ color: 'black' }} type="button">
                 Agregar propiedad 
                </Link>
            </div>
         </div>   
        <div className="listarPropiedades">
          <ListaDePropiedades/>
        </div>
        <div>
      </div>
      </div>
    )}
}
export default ActionPropiedad;
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ListaDeUsuarios from './components/listaDeUsuarios'
import Navbar from './components/Navbar'


class ActionUsuarios extends Component{
  constructor() {
    super();
    
  }
    render() {
        return (
          <div>
             <Navbar/> 
             <div>
               <header>
                  <div>
                     <h5 align="center">Usuarios</h5>
                  </div>
                </header>
              </div>
              <div className="row">
                 <div className="col s4 ">
                     <label>Filtrar por nombre:</label>
                     <input type="text" size="15"></input>
                 </div>
                 <div className="col s4">
                     <label>Filtrar por fecha de registro:</label>
                     <input type="date" size="15"></input>
                 </div>
                 <div className="col s2 ">
                     <label>Estandar</label>
                     <input type="checkbox"></input>
                 </div>
                 <div className="col s2 ">
                     <label>Premium</label>
                     <input type="checkbox"></input>  
                 </div>
              </div>
              <div>
                   <button className=" indigo accent-1">
                      Cambiar Precio
                    </button>
              </div>
              <div>
                <ListaDeUsuarios>
                 </ListaDeUsuarios>
               </div>    
            </div>
        )
    }
}
export default ActionUsuarios;
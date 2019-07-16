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
                 <div className="col s1">
                     <p>Filtrar por nombre:</p>
                 </div>
                 <div className="col s3">
                     <input type="text"></input>
                 </div>
                 <div className="col s1s">
                     <p>Filtrar por fecha de registro:</p>
                 </div>
                 <div className="col s3">
                     <input type="date"></input>
                 </div>
                 <div className="col s1 ">
                     <p>Estandar</p>
                     <input type="checkbox"></input>
                 </div>
                 <div className="col s1 ">
                     <p>Premium</p>
                     <input type="checkbox"></input>  
                 </div>
              </div>
              <div>
                <ListaDeUsuarios/>
               </div>    
            </div>
        )
    }
}
export default ActionUsuarios;
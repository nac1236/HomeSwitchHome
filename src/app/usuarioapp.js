import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ListaDeUsuarios from './components/listaDeUsuarios';

class ActionUsuarios extends Component{
  constructor() {
    super();
    
  }
    render() {
        return (
          <div className="pantalla3">
             <div className="header">
               <header>
                  <div className="titulo2">
                     <h5 align="center">Usuarios</h5>
                  </div>
                 </header>
               </div>
              <div>
                <ListaDeUsuarios>
                 </ListaDeUsuarios>
               </div>    
                <div className="terminar subasta">
                   <button className=" indigo accent-1">
                      Premium/Standar
                    </button>
                    <button className=" indigo accent-1">
                      Cambiar Precio
                    </button>
                  </div>
                </div>
        )
    }
}
export default ActionUsuarios;
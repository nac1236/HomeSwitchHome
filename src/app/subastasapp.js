import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ListaDeSubastas from './components/listaDeSubastas';

class ActionSubastas extends Component{
  constructor() {
    super();
    
  }
    render() {
        return (
          <div className="pantalla2">
             <div className="header">
               <header>
                  <div className="titulo2">
                     <h5 align="center">Subastas</h5>
                  </div>
                 </header>
               </div>
              <div class="listarRecidencias">
                <ListaDeSubastas>

                 </ListaDeSubastas>
               </div>    
                <div className="terminar subasta">
                   <button className=" indigo accent-1">
                      Terminar subasta
                      <i className="tiny material-icons">event_available</i>
                    </button>
                  </div>
                </div>
        )
    }
}
export default ActionSubastas;
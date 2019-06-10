import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ListaDeSubastas from './components/listaDeSubastas';
import ActionPropiedad from './propiedadesapp';

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
              <div>
                <ListaDeSubastas>
                 </ListaDeSubastas>
               </div>    
                <div className="terminar subasta">
                   <button className=" indigo accent-1">
                      Terminar subasta
                    </button>
                  </div>
                </div>
        )
    }
}
export default ActionSubastas;
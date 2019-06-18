import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ListaDeSubastas from './components/listaDeSubastas';
import Navbar from './components/Navbar';

class ActionSubastas extends Component{
  constructor() {
    super();
    
  }
    render() {
        return (
          <div>
             <Navbar/>
             <div>
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
          </div>
        )
    }
}
export default ActionSubastas;
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ListaDeUsuarios from './components/listaDeUsuarios';
import Navbar from './components/Navbar';

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
              <div>
                <ListaDeUsuarios>
                 </ListaDeUsuarios>
               </div>    
                <div>
                   <button className=" indigo accent-1">
                      Cambiar Precio
                    </button>
                </div>
            </div>
        )
    }
}
export default ActionUsuarios;
import React, { Component } from 'react';
import ListaDeResidencias from 'listaDeResidencias.js';

class App extends Component {
  constructor() {
    super();
    }
    render() {
        return (
            <div className="pantalla1">
                <div className="header">
                   <header>
                      <div className="imagen">
                        <img src="C:\Users\Usuario\Documents.Logo-HSH" alt="HomeSwitchHome"/>
                      </div>
                      <div className="titulo">                     
                        <h1>HomeSwitchHome</h1>
                      </div>
                      <div className="cerra sesion">
                        <button>
                          Cerrar sesión
                        </button>
                      </div>
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
             <div class="listarPropiedades">
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
              <div className="eliminar">
                <button>
                  Subastar
                </button>
              </div>
            </div> 
      </div>
        )
    }
}
export default App;
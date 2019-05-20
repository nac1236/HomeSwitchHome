import React, { Component } from 'react';
import ListaDeSubastas from 'listaDeSubastas.js';
class App extends Component {
  constructor() {
    super();
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }


    render() {
        return (
          <div className="pantalla2">
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
                        <div className="lirecidencias">
                          <li><a href="./recidencias.js">Recidencias</a></li>
                        </div>
                        <div className="lihotsales">
                          <li><a href="./hotsales.js">Hotsales</a></li>
                        </div>
                        <div className="liusuarios">
                          <li><a href="./usuarios.js">Usuarios</a></li>
                        </div>
                       </ul>
                    </div>
                 </nav>
                </div>
                <div className="titulo2">
                  <h2>Recidencias</h2>
                </div>
          </header>
       </div>
       <div class="listarRecidencias">
          <ListaDeResidencias>

          </ListaDeResidencias>
      </div>    
      <div className="botones">
        <div className="terminar subasta">
          <button>
            Terminar subasta
          </button>
         </div>
      </div>
</div>
        )
    }
}
export default App;
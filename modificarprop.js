import React, { Component } from 'react';
class App extends Component {
    constructor() {
      super();
      }
 render(){
     return(
        <div className="pantalla formulario">
             <div className="header">
                   <header>
                      <div className="imagen">
                        <img src="C:\Users\Usuario\Documents.Logo-HSH" alt="HomeSwitchHome"/>
                      </div>
                      <div className="titulo">                     
                        <h1>HomeSwitchHome</h1>
                      </div>
                      <div className="titulo2">
                         <h2>Modificar propiedad</h2>
                      </div>
                    </header>
            </div>
            <div className="formulario">
                <div className="form">
                    <form>
                        <div className="nombre">
                            <label>Nombre: <input type="text" id="nombre" name="nombre"></input></label>
                        </div>
                        <div className="localidad">
                            <label>Localidad: <input type="text" id="localidad" name="localidad"></input></label>
                        </div>
                        <div className="provincia">
                            <label>Provincia: <input type="text" id="provincia" name="provincia"></input></label>
                        </div>
                        <div className="descripcion">
                            <label>Descripción: <input type="text" id="decripcion" name="descripcion"></input></label>
                        </div>
                        <div className="botones">
                            <button type="submit">
                              Aceptar
                            </button>
                          <div className="cancelar">
                            <button>
                              Cancelar
                            </button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>    
        </div>
     )
  }
}
export default App;
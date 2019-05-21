import React, { Component } from 'react';
class App extends Component {
    constructor() {
      super();
      }
 render(){
     return(
        <div className="pantalla agregar subasta">
             <div className="header">
                   <header>
                      <div className="imagen">
                        <img src="C:\Users\Usuario\Documents.Logo-HSH" alt="HomeSwitchHome"/>
                      </div>
                      <div className="titulo">                     
                        <h1>HomeSwitchHome</h1>
                      </div>
                      <div className="titulo2">
                         <h2>Iniciar subasta</h2>
                      </div>
                    </header>
            </div>
            <div className="formulario">
                <div className="form">
                    <form>
                        <div className="monto">
                            <label>Monto minimo: <input type="text" id="monto" name="monto"></input></label>
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
<<<<<<< HEAD
import React, { Component } from 'react';
class FormAgregarSubasta extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="pantalla agregar subasta">
        <div className="formulario">
          <div className="form">
            <form>
              <div className="monto">
                <label>Monto minimo: <input type="number" step="any" id="monto" name="monto" required></input></label>
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
=======
import React, { Component } from 'react';
class FormAgregarSubasta extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="pantalla agregar subasta">
        <div className="formulario">
          <div className="form">
            <form>
              <div className="monto">
                <label>Monto minimo: <input type="number" step="any" id="monto" name="monto" required></input></label>
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
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21
export default FormAgregarSubasta;
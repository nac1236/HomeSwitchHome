<<<<<<< HEAD
import React, { Component } from 'react';

class FormAgregarPropiedad extends Component {
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
      <div className="pantalla formulario">
        <div className="formulario">
          <div className="form">
            <form method="post" enctrype="multipart/form-data">
              <div className="nombre">
                <label>Nombre: <input type="text" id="nombre" name="nombre" required onChange={this.handleChange}></input></label>
              </div>
              <div className="localidad">
                <label>Localidad: <input type="text" id="localidad" name="localidad" required onChange={this.handleChange}></input></label>
              </div>
              <div className="provincia">
                <label>Provincia: <input type="text" id="provincia" name="provincia" required onChange={this.handleChange}></input></label>
              </div>
              <div className="descripcion">
                <label>Descripción: <textarea type="text" id="decripcion" name="descripcion" required onChange={this.handleChange}></textarea></label>
              </div>
              <div className="imagenes">
                <label>imagenes: <input type="file" id="imagenes" name="imagenes[]" multiple required accept="image/png , .jpg, .jpeg" onChange={this.handleChange}></input></label>
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
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class FormAgregarPropiedad extends Component {
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
      <div className="pantalla formulario">
        <div className="formulario">
          <div className="form">
            <form method="post" enctrype="multipart/form-data">
                <label>Nombre: <input type="text" id="nombre" name="nombre" required onChange={this.handleChange}></input></label>
                <label>Localidad: <input type="text" id="localidad" name="localidad" required onChange={this.handleChange}></input></label>
                <label>Provincia: <input type="text" id="provincia" name="provincia" required onChange={this.handleChange}></input></label>
                <label>Descripción: <textarea type="text" id="decripcion" name="descripcion" required onChange={this.handleChange}></textarea></label>
                <label>imagenes: <input type="file" id="imagenes" name="imagenes[]" multiple required accept="image/png , .jpg, .jpeg" onChange={this.handleChange}></input></label>
              <div className="botones">
                <button type="submit">
                <Link style={{color: 'black'}} to="/propiedades">
                       Aceptar
                </Link>
                </button>
                <div className="cancelar">
                  <button>
                    <Link style={{color: 'black'}} to="/propiedades">
                       Cancelar
                    </Link>
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
export default FormAgregarPropiedad;
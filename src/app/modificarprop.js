import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class FormModificarPropiedad extends Component {
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
      <div >
        <nav className="indigo accent-1">
          <ul>
            <li className="right hide-on-med-and-down"><Link to="/">Cerrar sesion</Link></li>
          </ul>
        </nav>
        <h5 align="center">Modificar propiedad</h5>
          <div className="container">
            <div className="row">
            <form method="post" enctype="multipart/form-data">
            <div className="row">
              <div className="col s2">
                <p>Nombre:</p>
              </div>
              <div className="col s5">
                <input input type="text" id="nombre" name="nombre" required onChange={this.handleChange} autoFocus></input>
              </div>
            </div>
            <div className="row">
              <div className="col s2">
                <p>Localidad:</p>
              </div>
              <div className="col s5">
                <input input  type="text" id="localidad" name="localidad" required onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="row">
              <div className="col s2">
                <p>Provincia:</p>
              </div>
              <div className="col s5">
                <input type="text" id="provincia" name="provincia" required onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="row">
              <div className="col s2">
                <p>Precio:</p>
              </div>
              <div className="col s5">
                <input type="number" id="costo" name="costo" required onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="row">
              <div className="col s2">
                <p>Descripcion::</p>
              </div>
              <div className="col s5">
                 <textarea type="text" id="decripcion" name="descripcion" required onChange={this.handleChange}></textarea>
              </div>
            </div>
            <div className="row">
             <div className="col s2">
                <button className="indigo accent-1 left" style={{ color: 'black' }} type="submit">
                  Modificar
                </button>
              </div>
              <div className="col s2">
               <Link to="/propiedades" className="indigo accent-1 left" style={{ color: 'black' }} type="button">
                      Volver atrás
               </Link>
            </div>
            </div>
            </form>
            </div>
          </div>
        </div>
    )
  }
}
export default FormModificarPropiedad;
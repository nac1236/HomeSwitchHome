import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class FormAgregarPropiedad extends Component {
  constructor() {
    super();
    this.state = {
      _id: '',
      nombre: '',
      localidad: '',
      provincia: '',
      descripcion: '',
      costo: '',
      propiedades: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addPropiedades = this.addPropiedades.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  fetchPropiedades() {
    fetch('api/props')
      .then(res => res.json())
      .then(data => {
        this.setState({ propiedades: data }),
          console.log(this.state.propiedades)
      })
  }

  addPropiedades(e) {
    fetch('/api/propiedad', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        M.toast({ html: 'Propiedad guardada' });
        this.setState({ _id: '', nombre: '', localidad: '', provincia: '', description: '', costo: '' });
        this.fetchPropiedades();
      })
      .catch(err => console.error(err));
    e.preventDefault();
  }

  render() {
    return (
      <div >
        <nav className="indigo accent-1">
          <ul>
            <li className="right hide-on-med-and-down"><Link to="/">Cerrar sesion</Link></li>
          </ul>
        </nav>
        <h5 align="center">Agregar propiedad</h5>
        <div className="container">
          <div className="row">
            <form method="post" enctype="multipart/form-data" onSubmit={this.addPropiedades}>
              <div>
                <label style={{ color: 'black' }}>Nombre:<input type="text" id="nombre" name="nombre" className="white" required onChange={this.handleChange} autoFocus></input></label>
                <label style={{ color: 'black' }}>Localidad: <input type="text" id="localidad" name="localidad" className="white" required onChange={this.handleChange}></input></label>
                <label style={{ color: 'black' }}>Provincia: <input type="text" id="provincia" name="provincia" className="white" required onChange={this.handleChange}></input></label>
                <label style={{ color: 'black' }}>Precio: <input type="number" id="costo" name="costo" className="white" required onChange={this.handleChange}></input></label>
                <label style={{ color: 'black' }}>Descripción: <textarea type="text" id="decripcion" name="descripcion" className="white" required onChange={this.handleChange}></textarea></label>
                <label style={{ color: 'black' }}>imagenes: <input type="file" id="imagenes" name="imagenes[]" multiple accept="image/png , .jpg, .jpeg" onChange={this.handleChange}></input></label>
              </div>
              <div className="row">
                <div className="col s2">
                  <button  className="btn waves-effect waves-teal" type="submit">
                    Aceptar
                </button>
                </div>
                <div className="col s2">
                  <Link to="/propiedades"  className="btn waves-effect waves-teal" type="button">
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
export default FormAgregarPropiedad;
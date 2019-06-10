import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class FormAgregarPropiedad extends Component {
  constructor() {
    super();
    this.state={
      propiedades:[],
      _id:'',
      nombre:'',
      localidad:'',
      provincia:'',
      descripcion:''
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
    fetch('api/propiedades')
      .then(res => res.json())
      .then(data => {
        this.setState({ propiedades: data }),
          console.log(this.state.propiedades)
      })
  }

  addPropiedades(e) {
    e.preventDefault();
      fetch('/api/propiedades', {
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
          window.M.toast({html: 'Propiedades Saved'});
          this.setState({nombre: '', localidad: '', provincia:'', description: ''});
          this.fetchPropiedades();
        })
        .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="pantalla formulario">
        <h5 align="center">Agregar propiedad</h5>
          <div className="container">
            <form method="post" enctrype="multipart/form-data" onSubmit={this.addTask}>
            <div input-field>
                <label style={{ color: 'black' }}>Nombre:<input type="text" id="nombre" name="nombre" className="white" required onChange={this.handleChange} autoFocus></input></label>
                <label  style={{ color: 'black' }}>Localidad: <input type="text" id="localidad" name="localidad" className="white" required onChange={this.handleChange}></input></label>
                <label  style={{ color: 'black' }}>Provincia: <input type="text" id="provincia" name="provincia" className="white" required onChange={this.handleChange}></input></label>
                <label  style={{ color: 'black' }}>Descripción: <textarea type="text" id="decripcion" name="descripcion" className="white" required onChange={this.handleChange}></textarea></label>
                <label  style={{ color: 'black' }}>imagenes: <input type="file" id="imagenes" name="imagenes[]" multiple accept="image/png , .jpg, .jpeg" onChange={this.handleChange}></input></label>
            </div>
             <div>
                <button className="indigo accent-1 left" style={{ color: 'black' }} type="submit">
                  Aceptar
                </button>
              </div>
            </form>
            <div>
                  <Link to="/propiedades" className="indigo accent-1 left" style={{ color: 'black' }} type="button">
                  Cancelar
                  </Link>
            </div>
          </div>
        </div>
    )
  }
}
export default FormAgregarPropiedad;
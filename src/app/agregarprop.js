import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class FormAgregarPropiedad extends Component {
  constructor() {
    super();
    this.state={
      _id:'',
      nombre:'',
      localidad:'',
      provincia:'',
      descripcion:'',
      propiedades:[]
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
  componentDidMount() {
    this.fetchPropiedades();
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
          M.toast({html: 'Propiedad guardada'});
          this.setState({nombre: '', localidad: '', provincia:'', description: ''});
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
            <form method="post" enctrype="multipart/form-data" onSubmit={this.addPropiedades}>
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
            </div>
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
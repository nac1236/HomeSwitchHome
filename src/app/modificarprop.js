import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class FormModificarPropiedad extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      propiedad: {}
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  componentDidMount() {
    fetch(`/api/propiedad/${this.props.match.params.propId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ propiedad: data })
      })
    console.log(this.state)
  }
  editNombre(id) {
    fetch(`/api/propiedad/nombre/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        nombre: this.state.nombre,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        window.M.toast({ html: 'Propiedad actualizada' });
        this.setState({ nombre: '' });
        fetch('api/props')
          .then(res => res.json())
          .then(data => {
            this.setState({ propiedades: data }),
              console.log(this.state.propiedades)
          })
      });
  }
  editDescripcion(id) {
    fetch(`/api/propiedad/desc/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        descripcion: this.state.descripcion,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        window.M.toast({ html: 'Propiedad actualizada' });
        this.setState({ descripcion: '' });
        fetch('api/props')
          .then(res => res.json())
          .then(data => {
            this.setState({ propiedades: data }),
              console.log(this.state.propiedades)
          })
      });
  }
  editCosto(id) {
    fetch(`/api/propiedad/costo/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        costo: this.state.costo,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        window.M.toast({ html: 'Propiedad actualizada' });
        this.setState({ costo: '' });
        fetch('api/props')
          .then(res => res.json())
          .then(data => {
            this.setState({ propiedades: data }),
              console.log(this.state.propiedades)
          })
      });
  }
  render() {
    return (
      <>
        <div >
          <nav className="indigo accent-1">
            <ul>
              <li className="right hide-on-med-and-down"><Link to="/">Cerrar sesion</Link></li>
            </ul>
          </nav>
          <br></br>
          <div className="container">
            <div className="row">
              <form method="post" enctype="multipart/form-data">
                <div className="row">
                  <form>
                    <div className="col s2">
                      <p>Nombre:</p>
                    </div>
                    <div className="col s5">
                      <input input type="text" id="nombre" name="nombre" defaultValue={this.state.propiedad.nombre} onChange={this.handleChange} autoFocus></input>
                    </div>
                    <div className="col s2">
                      <button className="indigo accent-1 left" style={{ color: 'black' }} onClick={() => this.editNombre(this.state.propiedad._id)}>
                        <i className="tyni material-icons">edit</i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="row">
                  <div className="col s2">
                    <p>Localidad:</p>
                  </div>
                  <div className="col s5">
                    <p>{this.state.propiedad.localidad}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col s2">
                    <p>Provincia:</p>
                  </div>
                  <div className="col s5">
                    <p>{this.state.propiedad.provincia}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div >
        <div className="formulario">
          <div className="form">
            <form method="post" enctrype="multipart/form-data">
              <div className="nombre">
                <label>Nombre: <input type="text" id="nombre" name="nombre" onChange={this.handleChange}></input></label>
              </div>
              <div className="col s5">
                <input type="number" id="costo" name="costo" defaultValue={this.state.propiedad.costo} onChange={this.handleChange}></input>
              </div>
              <div className="col s2">
                <button className="indigo accent-1 left" style={{ color: 'black' }} onClick={() => this.editCosto(this.state.propiedad._id)}>
                  <i className="tyni material-icons">edit</i>
                </button>
              </div>
              <div className="descripcion">
                <label>Descripción: <textarea type="text" id="decripcion" name="descripcion" onChange={this.handleChange}></textarea></label>
              </div>
              <div className="col s5">
                <input type="text" id="decripcion" name="descripcion" onChange={this.handleChange} defaultValue={this.state.propiedad.descripcion}></input>
              </div>
              <div className="col s2">
                <button className="indigo accent-1 left" style={{ color: 'black' }} onClick={() => this.editDescripcion(this.state.propiedad._id)}>
                  <i className="tyni material-icons">edit</i>
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
      </>
    )
  }
}
export default FormModificarPropiedad;
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
  editNombre(e, id) {
    e.preventDefault()
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
  editDescripcion(e, id) {
    e.preventDefault()
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
  editCosto(e, id) {
    e.preventDefault()
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
      <div >
        <nav className="indigo accent-1">
          <ul>
            <li className="right hide-on-med-and-down"><Link to="/">Cerrar sesion</Link></li>
          </ul>
        </nav>
        <h5 align="center">Modificar propiedad</h5>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="row">
              <form onSubmit={(e) => this.editNombre(e, this.state.propiedad._id)}>
                <div className="col s2">
                  <p>Nombre:</p>
                </div>
                <div className="col s5">
                  <input input type="text" id="nombre" name="nombre" defaultValue={this.state.propiedad.nombre} onChange={this.handleChange} autoFocus></input>
                </div>
                <div className="col s2">
                  <button className="btn waves-effect waves-teal" type="submit">
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
            <form onSubmit={(e) => this.editCosto(e, this.state.propiedad._id)}>
              <div className="row">
                <div className="col s2">
                  <p>Precio:</p>
                </div>
                <div className="col s5">
                  <input type="number" id="costo" name="costo" defaultValue={this.state.propiedad.costo} onChange={this.handleChange}></input>
                </div>
                <div className="col s2">
                  <button className="btn waves-effect waves-teal" type="submit">
                    <i className="tyni material-icons">edit</i>
                  </button>
                </div>
              </div>
            </form>
            <form onSubmit={(e) => this.editDescripcion(e, this.state.propiedad._id)}>
              <div className="row">
                <div className="col s2">
                  <p>Descripcion:</p>
                </div>
                <div className="col s5">
                  <input type="text" id="decripcion" name="descripcion" onChange={this.handleChange} defaultValue={this.state.propiedad.descripcion}></input>
                </div>
                <div className="col s2">
                  <button className="btn waves-effect waves-teal" type="submit">
                    <i className="tyni material-icons">edit</i>
                  </button>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col s2">
                <Link to="/propiedades" className="btn waves-effect waves-teal" type="button">
                  Volver atrás
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FormModificarPropiedad;

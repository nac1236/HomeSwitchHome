import React, { Component } from 'react';

class BotonAltaPremium extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onChange(this.props.id)
  }

  render() {
    return (
      <button
        type="button"
        className="btn waves-effect waves-teal"
        onClick={this.handleChange}
      >
        Alta a premium
        </button>
    )
  }
}

class BotonBajaPremium extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onChange(this.props.id)
  }

  render() {
    return (
      <button
        type="button"
        className="btn waves-effect waves-teal"
        onClick={this.handleChange}
      >
        Baja de premium
        </button>
    )
  }
}

class ListaDeUsuarios extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
      estandar: [],
      premium: [],
      _id: ''
    }
  }
  componentDidMount() {
    this.fetchUsuarios()
    this.filtrarEstandar()
    this.filtrarPremium()
    console.log(this.estandar)
    console.log(this.premium)
  }

  filtrarPremium() {
    this.setState({
      estandar: this.state.usuarios.filter((usuario) => usuario.tipo_suscripcion == "true")
    })
  }

  filtrarEstandar() {
    this.setState({
      estandar: this.state.usuarios.filter((usuario) => usuario.tipo_suscripcion == "false")
    })
  }

  altaUser(id) {
    fetch(`/api/altausuario/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then( () => {
        M.toast({ html: 'Usuario cambiado a premium' })
      })
  }

  bajaUser(id) {
    fetch(`/api/bajausuario/${id}`,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then( () => {
        M.toast({ html: 'Usuario cambiado a estándar' })
      })
  }

  fetchUsuarios() {
    fetch('api/usuarios')
      .then(res => res.json())
      .then(data => {
        this.setState({ usuarios: data }),
          console.log(this.state.usuarios)
      })
  }

  render() {
    return (
      <div>
        <table className="striped bordered">
          <thead className="grey">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Tipo</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="white">
            {
              this.state.usuarios.map((usuarios, index) => {
                return (
                  <tr key={index}>
                    <td>{usuarios.nombre}</td>
                    <td>{usuarios.apellido}</td>
                    <td>{usuarios.email}</td>
                    <td>{usuarios.tipo_suscripcion ? <p>Premium</p> : <p>Estándar</p>}</td>
                    <td>{usuarios.tipo_suscripcion ? <BotonBajaPremium id={usuarios._id} onChange={this.bajaUser} /> : <BotonAltaPremium id={usuarios._id} onChange={this.altaUser}/>}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default ListaDeUsuarios
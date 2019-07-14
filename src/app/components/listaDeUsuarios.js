import React, { Component } from 'react';

class BotonAltaPremium extends Component {
  constructor(props) {
    super(props)
  }

  altaUser() {
    fetch(`/api/altausuario/${this.props.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(M.toast({ html: 'Usuario cambiado a premium' }))
  }

  render() {
    return (
      <button
        type="button"
        className="btn waves-effect waves-teal"
        onClick={() => this.altaUser()}
      >
        Alta a premium
        </button>
    )
  }
}

class BotonBajaPremium extends Component {
  constructor(props) {
    super(props)
  }

  bajaUser() {
    fetch(`/api/bajausuario/${this.props.id}`,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(M.toast({ html: 'Usuario cambiado a estándar' }))
  }

  render() {
    return (
      <button
        type="button"
        className="btn waves-effect waves-teal"
        onClick={() => this.bajaUser()}
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
                    <td>{usuarios.tipo_suscripcion ? <BotonBajaPremium id={usuarios._id} /> : <BotonAltaPremium id={usuarios._id} />}</td>
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
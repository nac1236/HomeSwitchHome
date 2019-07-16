import React, { Component } from 'react'
import Navbaruser from './components/Navbaruser'
import cookie from 'react-cookies';

function premium() {
  alert("Para ser premium acercate a nuestra sucursal o envía un mail a homeswitchhome@hotmail.com")
}
class Perfil extends Component {
  constructor() {
    super()
    this.state = {
      tarjetas: [],
      usuario: {},
      userId: cookie.load('userId')
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTarjetas = this.addTarjetas.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  fetchTarjetas() {
    fetch(`/api/tarjetas/${this.state.userId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ tarjetas: data }),
          console.log(this.state.tarjetas)
      })
  }
  componentDidMount() {
    this.fetchUsuario(this.state.userId)
    this.fetchTarjetas()
  }

  editNombre(e, id) {
    e.preventDefault()
    fetch(`/api/usuario/nombre/${id}`, {
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
        window.M.toast({ html: 'Nombre actualizado' });
        this.setState({ nombre: '' });
      });
  }
  editPassword(e, id) {
    e.preventDefault()
    let { oldpassword, password } = e.body
    if (oldpassword == password) {
      fetch(`/api/usuario/pass/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          nombre: this.state.password,
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({ html: 'Contraseña actualizada' });
          this.setState({ password: '' });
        });
    }
  }
  editApellido(e, id) {
    e.preventDefault()
    fetch(`/api/usuario/apellido/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        nombre: this.state.apellido,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        window.M.toast({ html: 'Apellido actualizado' });
        this.setState({ apellido: '' });
      });
  }
  addTarjetas(e) {
    fetch(`/api/tarjeta/${this.state.userId}`, {
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
        M.toast({ html: 'Tarjeta guardada' });
        this.setState({ numero: '' });
        this.fetchTarjetas();
      })
      .catch(err => console.error(err));
    e.preventDefault();
  }

  fetchUsuario(id) {
    fetch(`/api/usuario/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ usuario: data })
      })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Navbaruser />
        <br></br>
        <div className="row">
          <div className="col s6">
            <form onSubmit={(e) => this.editNombre(e, this.state.usuario._id)}>
              <div className="row">
                <div className="col s2">
                  <p>Nombre:</p>
                </div>
                <div className="col s5">
                  <input type="text" name="nombre" id="nombre" defaultValue={this.state.usuario.nombre} onChange={this.handleChange}></input>
                </div>
                <div className="col s5">
                  <button type="submit" className="btn waves-effect waves-teal" ><i className="tyni material-icons">edit</i></button>
                </div>
              </div>
            </form>
            <form onSubmit={(e) => this.editApellido(e, this.state.usuario._id)}>
              <div className="row">
                <div className="col s2">
                  <p>Apellido:</p>
                </div>
                <div className="col s5">
                  <input type="text" name="apellido" id="apellido" defaultValue={this.state.usuario.apellido} onChange={this.handleChange}></input>
                </div>
                <div className="col s5">
                  <button type="submit" className="btn waves-effect waves-teal" ><i className="tyni material-icons">edit</i></button>
                </div>
              </div>
            </form>
            <form onSubmit={(e) => this.editPassword(e, this.state.usuario._id)}>
              <p>Para cambiar la contraseña ingrese su contraseña y despues ingrese su nueva contraseña</p>
              <div className="row">
                <div className="col s2">
                  <p>Contraseña:</p>
                </div>
                <div className="col s5">
                  <input type="password" id="oldpassword" name="oldpassword" onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="row">
                <div className="col s2">
                  <p>Nueva contraseña:</p>
                </div>
                <div className="col s5">
                  <input type="password" name="password" id="password" onChange={this.handleChange}></input>
                </div>
                <div className="col s5">
                  <button type="submit" className="btn waves-effect waves-teal" onClick ><i className="tyni material-icons">edit</i></button>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col s6">
                <p>Tipo de usuario: {this.state.usuario.tipo_suscripcion ? "Premium" : "Estándar"} </p>
                {this.state.usuario.tipo_suscripcion || (<button className="btn waves-effect waves-teal" onClick={() => premium()}>¡Quiero ser Premium!</button>)}
              </div>
              <div className="col s3">
                <p>Creditos: {this.state.usuario.creditos} </p>
              </div>
            </div>
          </div>
          <div className="col s6">
            <form>
              <p>Numero de tarjeta activa:</p>
              <div className="row">
                <table className="striped bordered">
                  <thead className="grey">
                    <tr>
                      <th>Tarjetas registradas</th>
                    </tr>
                  </thead>
                  <tbody className="white">
                    {
                      this.state.tarjetas.map(tarjeta => {
                        return (
                          <tr key={tarjeta.id}>
                            <td>
                              <div className="col s3">
                                {tarjeta.numero}
                              </div>
                              <div className="col s4">
                                <button className="btn waves-effect waves-teal">Cambiar tarjeta activa</button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </form>
            <form onSubmit={this.addTarjetas}>
              <p>Registrar nueva tarjeta</p>
              <div className="row">
                <div className="col s5">
                  <input type="text" placeholder="Numero de tarjeta" required></input>
                </div>
                <div className="col s4">
                  <button type="submit" className="btn waves-effect waves-teal">Registrar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
    )
  }
}
export default Perfil
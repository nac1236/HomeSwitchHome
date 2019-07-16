import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
class FormAgregarUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      nombre: '',
      apellido: '',
      contraseña: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addUsuarios = this.addUsuarios.bind(this)
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addUsuarios(e) {
    console.log(e)
    fetch('/api/usuario', {
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
        M.toast({ html: 'Usuario guardado' });
      })
      .catch(err => console.error(err));
    e.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <form method="post" onSubmit={this.addUsuarios}>
          <h4 align="center">Crea tu cuenta</h4>
          <div>
            <label style={{ color: 'black' }}>Correo electrónico: <input type="text" id="mail" name="mail" className="white" required onChange={this.handleChange}></input></label>
            <label style={{ color: 'black' }}>Nombre:<input type="text" id="nombre" name="nombre" className="white" required onChange={this.handleChange}></input></label>
            <label style={{ color: 'black' }}>Apellido: <input type="text" id="apellido" name="apellido" className="white" required onChange={this.handleChange}></input></label>
            <label style={{ color: 'black' }}>Contraseña: <input type="password" id="password" name="password" className="white" required onChange={this.handleChange}></input></label>
            <label style={{ color: 'black' }}>Confirme contraseña: <input type="password" id="otracontraseña" name="otracontraseña" className="white" onChange={this.handleChange}></input></label>
          </div>
          <div>
            <button className="indigo accent-1 left" style={{ color: 'black' }} type="submit">
              Registrar
            </button>
          </div>
        </form>
        <Link to="tarjeta/5d2b93a2f4dd6723785167fa">Tarjeta</Link>
      </div>
    )
  }
}
export default FormAgregarUser;
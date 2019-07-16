import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, Route } from 'react-router-dom'
import Tarjeta from './tarjeta';

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
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  onClick() {

  }


  render() {
    return (
      <div className="container">
        <form method="post">
          <h4 align="center">Crea tu cuenta</h4>
          <div>
            <label style={{ color: 'black' }}>Correo electrónico: <input type="text" id="email" name="email" className="white" required onChange={this.handleChange}></input></label>
            <label style={{ color: 'black' }}>Nombre:<input type="text" id="nombre" name="nombre" className="white" required onChange={this.handleChange}></input></label>
            <label style={{ color: 'black' }}>Apellido: <input type="text" id="apellido" name="apellido" className="white" required onChange={this.handleChange}></input></label>
            <label style={{ color: 'black' }}>Contraseña: <input type="password" id="password" name="password" className="white" required onChange={this.handleChange}></input></label>
            <label style={{ color: 'black' }}>Confirme contraseña: <input type="password" id="otracontraseña" name="otracontraseña" className="white" onChange={this.handleChange}></input></label>
          </div>
          <div>
            <button className="btn waves-effect waves-teal" type="submit">
              <Route path="/tarjeta" component={Tarjeta}></Route>
              <Link to="/tarjeta" usuario={this.state}>
                Registrar
              </Link>
            </button>
          </div>
        </form>

      </div>
    )
  }
}
export default FormAgregarUser;
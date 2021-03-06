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
    e.preventDefault();
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

      })
      .catch(err => console.error(err));
    
  }


  render() {
    return (
      <div className="container">
        <form method="post" onSubmit={this.addUsuarios}>
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
              Registrar
            </button>
          </div>
        </form>
        {/*<Link to="/tarjeta" usuario={this.state}>Tarjeta</Link>*/}
      </div>
    )
  }
}
export default FormAgregarUser;
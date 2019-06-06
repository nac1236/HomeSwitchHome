import React, { Component } from 'react';
class ListaDeUsuarios extends Component{
  constructor() {
    super();
    this.state = {
      usuarios: [],
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
  <table class="striped bordered">
    <thead className="grey">
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Email</th>
      <th>Premium</th>
    </tr>
    </thead>
    <tbody className="white">
    {
      this.state.usuarios.map(usuarios => {
        return (
          <tr key={usuarios.id}>   
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
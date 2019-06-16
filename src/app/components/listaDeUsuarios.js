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

  componentDidUpdate() {
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
    <div className="row">
      <div className="col s4 ">
         <label>Filtrar por nombre:</label>
         <input type="text" size="15"></input>
      </div>
      <div className="col s4">
         <label>Filtrar por fecha de registro:</label>
         <input type="date" size="15"></input>
      </div>
      <div className="col s2 ">
          <label>Estandar</label>
          <input type="checkbox"></input>
      </div>
      <div className="col s2 ">
          <label>Premium</label>
          <input type="checkbox"></input>  
      </div>
    </div>
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
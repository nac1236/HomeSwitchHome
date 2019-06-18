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
    <table className="striped bordered">
    <thead className="grey">
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Email</th>
      <th>Tipo</th>
    </tr>
    </thead>
    <tbody className="white">
    {
      this.state.usuarios.map(usuarios => {
        return (
          <tr key={usuarios.id}>
            <td>{usuarios.nombre}</td>
            <td>{usuarios.apellido}</td>
            <td>{usuarios.email}</td>
            <td>{}</td>
            <td><button className=" indigo accent-1">Premium/Standar</button></td>   
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
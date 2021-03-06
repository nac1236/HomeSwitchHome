import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ActionPropiedad from '../propiedadesapp';

class ListaDePropiedades extends Component {

  constructor(props) {
    super(props);
    this.state = {
      propiedades: [],
      _id: '',
      seActualizo: ''
    }
    this.deletePropiedades = this.deletePropiedades.bind(this)
  }
  deletePropiedades(id) {
    if (confirm('¿Deseas eliminar esta propiedad?')) {
      fetch(`/api/propiedad/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({ html: 'Propiedad eliminada' });
          this.setState({ seActualizo: true })
          this.fetchPropiedades();
        });
    }
  }

  render() {
    return (
      <div>
        <ActionPropiedad />
        <table className="striped bordered">
          <thead className="grey">
            <tr>
              <th>Nombre</th>
              <th>Localidad</th>
              <th>Provincia</th>
              <th>Descripcion</th>
              <th>Precio por semana</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="white">
            {
              this.props.propiedades.map((propiedad, index) => {
                return (
                  <tr key={index}>
                    <td>{propiedad.nombre}</td>
                    <td>{propiedad.localidad}</td>
                    <td>{propiedad.provincia}</td>
                    <td>{propiedad.descripcion}</td>
                    <td>${propiedad.costo}</td>
                    <td><button  className="btn waves-effect waves-teal" onClick={() => this.deletePropiedades(propiedad._id)}>Eliminar</button></td>
                    <td><Link  to={`${this.props.match.path}/${propiedad._id}`}  className="btn waves-effect waves-teal" type="button">Modificar</Link></td>
                    <td><Link  to={`${'/agregar_subastas'}/${propiedad._id}`}   className="btn waves-effect waves-teal"  type="button">Subastar</Link></td>
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

export default ListaDePropiedades
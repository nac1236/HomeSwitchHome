import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import ActionPropiedad from '../propiedadesapp'
export default class ListaDePropiedades extends Component {
  constructor(props) {
      super(props)
      console.log(this.props)
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
          fetch('api/props')
            .then(res => res.json())
            .then(data => {
                this.setState({ propiedades: data }),
                    console.log(this.state.propiedades)
            })
        });
    }   
  }
  render() {
    return (
      <div>
        <ActionPropiedad/>
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
             this.props.propiedades.map(propiedad => {
                return (
                  <tr key={propiedad.id}>
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
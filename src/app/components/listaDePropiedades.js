import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class ListaDePropiedades extends Component {

  constructor() {
    super();
    this.state = {
      propiedades: [],
      _id: '',
      seActualizo: ''
    }
    this.deletePropiedades = this.deletePropiedades.bind(this)
  }
  componentDidMount() {
    this.fetchPropiedades()
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
  fetchPropiedades() {
    fetch('api/props')
      .then(res => res.json())
      .then(data => {
        this.setState({ propiedades: data }),
          console.log(this.state.propiedades)
      })
  }

  render() {
    return (
      <div>
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
              this.state.propiedades.map((propiedad, index) => {
                return (
                  <tr key={index}>
                    <td>{propiedad.nombre}</td>
                    <td>{propiedad.localidad}</td>
                    <td>{propiedad.provincia}</td>
                    <td>{propiedad.descripcion}</td>
                    <td>${propiedad.costo}</td>
                    <td><button className=" indigo accent-1 left" onClick={() => this.deletePropiedades(propiedad._id)}>Eliminar</button></td>
                    <td><Link to="/modificar_propiedad" className="indigo accent-1 left" style={{ color: 'black' }} type="button">Modificar</Link></td>
                    <td><Link to="/agregar_subasta" className="indigo accent-1 left" style={{ color: 'black' }} type="button">Subastar</Link></td>
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
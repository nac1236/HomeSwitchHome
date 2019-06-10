import React, { Component } from 'react';
class ListaDePropiedades extends Component {

  constructor() {
    super();
    this.state = {
      propiedades: [],
      _id: ''
    }
    var propiedadP;
  }
  componentDidMount() {
    this.fetchPropiedades()
  }

  fetchPropiedades() {
    fetch('api/propiedades')
      .then(res => res.json())
      .then(data => {
        this.setState({ propiedades: data }),
          console.log(this.state.propiedades)
      })
  }

  render() {
    return (

<div>
<table class="striped bordered">
  <thead className="grey">
  <tr>
    <th>Nombre</th>
    <th>Localidad</th>
    <th>Provincia</th>
    <th>Descripcion</th>
  </tr>
  </thead>
  <tbody className="white">
  {
    this.state.propiedades.map(propiedad => {
      return (
        <tr key={propiedad.id}>
            <td>{propiedad.nombre}</td>
            <td>{propiedad.localidad}</td>
            <td>{propiedad.provincia}</td>
            <td>{propiedad.descripcion}</td>
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
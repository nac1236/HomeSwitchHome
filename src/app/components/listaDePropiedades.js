import React, { Component } from 'react';
class ListaDePropiedades extends Component {

  constructor() {
    super();
    this.state = {
      propiedades: [],
      _id: ''
    }
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
        <ul>
          {
            this.state.propiedades.map(propiedad => {
              return (
                <li key={propiedad.id}>
                  <h1>
                    {propiedad.nombre}
                  </h1>
                  <p>
                    {task.descripcion}
                  </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ListaDePropiedades
import React, { Component } from 'react';
import ListaSubastas from './ListaSubastas'
import { Route, Switch } from 'react-router-dom'
import DetallePropiedad from './DetallePropiedad'

class PaginaSubastas extends Component {
  constructor() {
    super();
    this.state = {
      subastas: [],
      _id: ''
    }
  }
  componentDidMount() {
    this.fetchSubastas()
  }

  fetchSubastas() {
    fetch('api/subastas')
      .then(res => res.json())
      .then(data => {
        this.setState({ subastas: data }),
          console.log(this.state.subastas)
      })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            path='/propiedades_disponibles' exact
            render={(props) => <ListaSubastas {...props} subastas={this.state.subastas} />} 
          />
          <Route
            path='/propiedades_disponibles/:propId' component={DetallePropiedad}
          />
        </Switch>
      </div>
    )
  }
}
export default PaginaSubastas

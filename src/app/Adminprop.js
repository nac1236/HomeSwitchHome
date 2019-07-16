import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FormModificarPropiedad from './modificarprop'
import  ListaDePropiedades from './components/listaDePropiedades'
class Adminprop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propiedades: [],
            _id: '',
            seActualizo: ''
          }
         // this.deletePropiedades = this.deletePropiedades.bind(this)
    }
    componentDidMount() {
        this.fetchPropiedades()
    }
    fetchPropiedades() {
        fetch('api/props')
            .then(res => res.json())
            .then(data => {
                this.setState({ propiedades: data }),
                    console.log(this.state.propiedades)
            })
    }
    /*deletePropiedades(id) {
        if(confirm('¿Deseas eliminar esta propiedad?')) {
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
              M.toast({html: 'Propiedad eliminada'});
              this.fetchPropiedades();
            });
        }
      }*/
    render() { 
        return (
            <div>
                <Switch>
                    <Route
                        path='/propiedades' exact
                        render={(props) => < ListaDePropiedades {...props} propiedades={this.state.propiedades} />}
                    />
                    <Route
                        path={`${this.props.match.path}/:propId`} component={FormModificarPropiedad}
                       
                    />
                 </Switch>
            </div>
        )
    }
}
export default Adminprop
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbaruser from './components/Navbaruser'
import VistaDeListaPropiedades from './components/UsuarioListaDePropiedades'
import DetallePropiedad from './components/DetallePropiedad'
import Userreserva from './userreserva';
import Subastauser from './subastauser';

class UserActivo extends Component {
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
                <Navbaruser />
                {/*<div className="row">
                    <div className=" col s1">
                        <p>Nombre:</p>
                    </div>
                    <div className=" col s3">
                        <input type="text"></input>
                    </div>
                    <div className=" col s1">
                        <p>Localidad:</p>
                    </div>
                    <div className=" col s3">
                        <input type="text"></input>
                    </div>
                    <div className=" col s1">
                        <p>Provinicia:</p>
                    </div>
                    <div className=" col s3">
                        <input type="text"></input>
                    </div>
                </div>*/}
                <Switch>
                    <Route
                        path='/propiedades_disponibles' exact
                        render={(props) => <VistaDeListaPropiedades {...props} propiedades={this.state.propiedades} />}
                    />
                    <Route
                        path={`${this.props.match.path}/:propId`} component={DetallePropiedad}
                    />
                </Switch>
            </div>
        )
    }
}
export default UserActivo
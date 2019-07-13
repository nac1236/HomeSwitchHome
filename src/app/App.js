
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AdminForm from './components/admin'
import ActionSubastas from './subastasapp'
import Usuarios from './usuarioapp'
import Adminprop from './Adminprop'
import ActionHotsale from './hotsaleapp'
import Login from './components/Login'
import FormAgregarPropiedad from './agregarprop'
import UserActivo from './UserActivo'
import Perfil from './perfil'
import ProtectedRoute from './components/protectedRoute'
import ProtectedAdmin from './components/protectedAdmin'
import cookie from 'react-cookies'
import Subastauser from './subastauser'

class App extends Component {

    componentWillMount() {
        this.setState({
            userId: cookie.load('_id'),
            tipo: cookie.load('tipo')
        })
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/propiedades" component={Adminprop}></Route>
                    <Route path="/agregar_propiedad" component={FormAgregarPropiedad} ></Route>
                    <Route path="/subastas" component={ActionSubastas}></Route>
                    <Route path="/admin" component={AdminForm}></Route>
                    <Route path="/usuarios" component={Usuarios}></Route>
                    <Route path="/propiedades_disponibles" component={UserActivo}></Route>
                    <Route path="/perfil" component={Perfil}></Route>
                    <Route path="/subastas_disponibles" component={Subastauser}></Route>
                    <Route path="/hotsales" component={ActionHotsale}></Route>
                    {/**  
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <ProtectedRoute 
                        path="/propiedades"
                        render={props => <ProtectedAdmin {...props} component={ActionPropiedad} />}> 
                    </ProtectedRoute>
                    <ProtectedRoute path="/agregar_propiedad" component={FormAgregarPropiedad} />
                    <ProtectedRoute path="/subastas" component={ActionSubastas}> </ProtectedRoute>
                    <ProtectedRoute
                        path="/admin" 
                        render={props => <ProtectedAdmin {...props} component={AdminForm} />}>
                    </ProtectedRoute>
                    <ProtectedRoute 
                        path="/usuarios" 
                        render={props => <ProtectedAdmin {...props} component={Usuarios} />}> 
                    </ProtectedRoute>
                    <ProtectedRoute path="/propiedades_disponibles" component={Premium}> </ProtectedRoute>
                    <ProtectedRoute path="/perfil" component={Perfil}> </ProtectedRoute>
                    <ProtectedRoute path="/subastas_disponibles" component={Subastauser}></ProtectedRoute>
                    */}
                </Switch>
            </>
        )
    }
}

export default App
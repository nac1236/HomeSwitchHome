
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AdminForm from './components/admin'
import ActionSubastas from './subastasapp'
import Usuarios from './usuarioapp'
import ActionPropiedad from './propiedadesapp'
import Login from './components/Login'
import FormAgregarPropiedad from './agregarprop'
import FormAgregarSubasta from './subastarprop'
import FormModificarPropiedad from './modificarprop'
import Premium from './premium'
import Perfil from './perfil'
import Subastauser from './subastauser'
import ProtectedRoute from './components/protectedRoute'
import ProtectedAdmin from './components/protectedAdmin'
import cookie from 'react-cookies'

class App extends Component {

    componentWillMount() {
        this.setState({ 
            userId: cookie.load('_id'),
            tipo: cookie.load('tipo')
        })
    }

    render() {
        return( 
            <div>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/propiedades" component={ActionPropiedad}></Route>
                    <Route path="/agregar_propiedad" component={FormAgregarPropiedad} ></Route>
                    <Route path="/modificar_propiedad" component={FormModificarPropiedad} ></Route>
                    <Route path="/agregar_subasta" component={FormAgregarSubasta} ></Route>
                    <Route path="/subastas" component={ActionSubastas}></Route>
                    <Route path="/admin" component={AdminForm}></Route>
                    <Route path="/usuarios" component={Usuarios}></Route>
                    <Route path="/propiedades_disponibles" component={Premium}></Route>
                    <Route path="/perfil" component={Perfil}></Route>
                    <Route path="/subastas_disponibles" component={Subastauser}></Route>
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
         </div>
        )
    }
}

export default App
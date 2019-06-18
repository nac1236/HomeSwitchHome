import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AdminForm from './components/admin'
import ActionSubastas from './subastasapp'
import Usuarios from './usuarioapp'
import ActionPropiedad from './propiedadesapp'
import Login from './components/Login'
import FormAgregarPropiedad from './agregarprop'
import Premium from './premium'
import Perfil from './perfil'
import ProtectedRoute from './components/protectedRoute'
import ProtectedAdmin from './components/protectedAdmin'
import cookie from 'react-cookies'

class App extends Component {

    componentWillMount() {
        this.state =  { 
            userId: cookie.load('_id') ,
            tipo: cookie.load('tipo')
        }
    }

    render() {
        return( 
            <div>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <ProtectedRoute path="/propiedades" component={ActionPropiedad} />
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
                </Switch>
         </div>
        )
    }
}

export default App
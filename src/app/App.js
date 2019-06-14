import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AdminForm from './components/admin'
import ActionSubastas from './subastasapp'
import Usuarios from './usuarioapp'
import ActionPropiedad from './propiedadesapp'
import Login from './components/Login'
import FormAgregarPropiedad from './agregarprop'


class App extends Component {
    render() {
        return( 
            <div>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/propiedades" component={ActionPropiedad}></Route>
                    <Route path="/agregar_propiedad" component={FormAgregarPropiedad} ></Route>
                    <Route path="/subastas" component={ActionSubastas}></Route>
                    <Route path="/admin" component={AdminForm}></Route>
                    <Route path="/usuarios" component={Usuarios}></Route>
                </Switch>
         </div>
        )
    }
}

export default App
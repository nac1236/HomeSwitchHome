import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppProp from './components/AppProp'
import Home from './components/Home'
import AdminForm from './components/admin';
import ActionSubastas from './subastasapp';
import Usuarios from './usuarioapp';
import ActionPropiedad from './propiedadesapp';

class App extends Component {
    render() {
        return( 
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/propiedades" component={AppProp}></Route>
                    <Route path="/subastas" component={ActionSubastas}></Route>
                    <Route path="/admin" component={AdminForm}></Route>
                    <Route path="/usuarios" component={Usuarios}></Route>
                </Switch>
         </div>
        )
    }
}

export default App
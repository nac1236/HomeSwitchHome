import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import ActionPropiedades from './propiedadesapp'
import Home from './components/Home'
import FormAgregarPropiedad from './agregarprop';
import FormAgregarSubasta from './agregarsub';
import AdminForm from './components/admin';
import ActionSubastas from './subastasapp';



class App extends Component {
    render() {
        return( 
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/propiedades" component={ActionPropiedades}></Route>
                    <Route path="/subastas" component={ActionSubastas}></Route>
                    <Route path="/propiedades/agregar" component={FormAgregarPropiedad}></Route>
                    <Route path="/subastas/agregar" component={FormAgregarSubasta}></Route>
                    <Route path="/admin" component={AdminForm}></Route>
                </Switch> 
            </div>
        )
    }
}

export default App
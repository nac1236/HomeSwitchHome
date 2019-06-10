import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import ActionPropiedades from './propiedadesapp'
import Home from './components/Home'
import FormAgregarPropiedad from './agregarprop';
import FormAgregarSubasta from './agregarsub';
import AdminForm from './components/admin'

=======
import ActionPropiedad from './propiedadesapp'
import Home from './components/Home'
import FormAgregarPropiedad from './agregarprop';
import FormAgregarSubasta from './agregarsub';
import AdminForm from './components/admin';
import ActionSubastas from './subastasapp';
import ModificarProp from './modificarprop';
import Usuarios from './usuarioapp';
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21

class App extends Component {
    render() {
        return( 
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
<<<<<<< HEAD
                    <Route path="/propiedades" component={ActionPropiedades}></Route>
                    <Route path="/propiedades/agregar" component={FormAgregarPropiedad}></Route>
                    <Route path="/subastas/agregar" component={FormAgregarSubasta}></Route>
                    <Route path="/admin" component={AdminForm}></Route>
                </Switch> 
            </div>
=======
                    <Route path="/propiedades" component={ActionPropiedad}></Route>
                    <Route path="/subastas" component={ActionSubastas}></Route>
                    <Route path="/propiedades/agregar" component={FormAgregarPropiedad}></Route>
                    <Route path="/subastas/agregar" component={FormAgregarSubasta}></Route>
                    <Route path="/admin" component={AdminForm}></Route>
                    <Route path="/propiedades/modificar" component={ModificarProp}></Route>
                    <Route path="/usuarios" component={Usuarios}></Route>
                </Switch> 
         </div>
>>>>>>> 44df1c2d90285d8f86e978c79437718a1ba7bb21
        )
    }
}

export default App
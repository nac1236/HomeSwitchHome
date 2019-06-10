import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch} from 'react-router-dom'
import ActionPropiedad from '../propiedadesapp'
import FormAgregarPropiedad from '../agregarprop'
import Blanco from './Blanco'


class AppProp extends Component {
    render() {
        return( 
            <div>
                <Blanco/>
                <Switch>
                <Route exact path="/propiedades" component={ActionPropiedad} ></Route>
                <Route path="/propiedades/agregar" component={FormAgregarPropiedad} ></Route>
                </Switch>
         </div>
        )
    }
}
export default AppProp
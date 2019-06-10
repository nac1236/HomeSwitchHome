import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch} from 'react-router-dom'
import ActionPropiedad from '../propiedadesapp'
import FormAgregarPropiedad from '../agregarprop'


class AppProp extends Component {
    render() {
        return( 
            <div>
                <ActionPropiedad/>
                <Route path="/propiedades/agregar" render={()=><FormAgregarPropiedad/>} ></Route>
         </div>
        )
    }
}
export default AppProp
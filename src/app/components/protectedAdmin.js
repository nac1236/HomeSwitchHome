import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from '../auth'
import cookie from 'react-cookies'

export const ProtectedAdmin = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={props => {
                if (cookie.tipo == 'Admin'){
                    return <Component {...props}/>
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        }/>
    )
}
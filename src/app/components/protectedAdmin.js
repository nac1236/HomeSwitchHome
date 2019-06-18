import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from '../auth'
import Cookies from 'react-cookie'

export const ProtectedAdmin = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={props => {
                if (Cookies.withCookies()){
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
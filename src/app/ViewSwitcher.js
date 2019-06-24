import React, { Component } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import cookie from 'react-cookie'

const ViewSwitcher = props => {
    if (!props.cookies.userId) {
        return <Login/>
    } else {
        return <Home/>
    }
}

export default ViewSwitcher

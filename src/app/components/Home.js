import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import ListaDePropiedades from './listaDePropiedades';

class Home extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <ListaDePropiedades></ListaDePropiedades>
                <img src="...\logos\Logo-HSH.png" alt="HomeSwitchHome"/>
            </div>
        )
    }
}
export default Home
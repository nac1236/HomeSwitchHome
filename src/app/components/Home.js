import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
class Home extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <img src="...\logos\Logo-HSH.png" alt="HomeSwitchHome"/>
            </div>
        )
    }
}
export default Home
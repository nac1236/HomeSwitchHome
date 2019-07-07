import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';
class ActionHotsale extends Component {
  constructor() {
    super();
}
render() {
  return(
      <div>   
        <Navbar/>     
        <div>
          <header>
            <div>
              <h5 align="center">Hotsales</h5>
            </div>
          </header>
        </div>
        <div>
           <ListaDeHotsales/>
        </div>
        <div>
      </div>
      </div>
    )}
}
export default ActionHotsale;
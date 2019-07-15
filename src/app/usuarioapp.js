import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import ListaDeUsuarios from './components/listaDeUsuarios'
import Navbar from './components/Navbar'


class ActionUsuarios extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <header>
            <div>
              <h5 align="center">Usuarios</h5>
            </div>
          </header>
        </div>
        <form>
          <div className="row">
            <div className="col s1">
              <p>Filtrar por nombre:</p>
            </div>
            <div className="col s3">
              <input type="text"></input>
            </div>
            <div className="col s1s">
              <p>Filtrar por fecha de registro:</p>
            </div>
            <div className="col s3">
              <input type="date"></input>
            </div>
          </div>
          <div className="input-field col s12">
            <p>
              <input id="premium" type="radio" name="suscripcion"
                value="premium" defaultChecked />
              <label htmlFor="premium">Male</label>
            </p>

            <p>
              <input id="estandar" type="radio" name="suscripcion"
                value="estandar" defaultChecked />
              <label htmlFor="estandar">Estándar</label>
            </p>

            <p>
              <input id="ambos" type="radio" name="suscripcion"
                value="ambos" defaultChecked />
              <label htmlFor="ambos">Ambos</label>
            </p>
          </div>
        </form>
        <div>
          <button className=" indigo accent-1">
            Cambiar Precio
                    </button>
        </div>
        <div>
          <ListaDeUsuarios />
        </div>
      </div>
    )
  }
}
export default ActionUsuarios;
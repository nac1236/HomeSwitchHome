import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class FormAgregarSubasta extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addSubasta = this.addSubasta.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addSubasta(e) {
      fetch(`/api/subasta/${id}`, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({html: 'Subasta guardada'});
          this.setState({monto_minimo: '',fecha_finalizacion: '', semana_reserva:''});
          this.fetchPropiedades();
        })
        .catch(err => console.error(err));
        e.preventDefault();
  }

  render() {
    return (
      <div >
        <nav className="indigo accent-1">
          <ul>
            <li className="right hide-on-med-and-down"><Link to="/">Cerrar sesion</Link></li>
          </ul>
        </nav>
        <h5 align="center">Agregar subasta</h5>
          <div className="container">
            <div className="row">
            <form onSubmit={this.addSubasta}>
            <div className="row">
              <div className="col s2">
                <p>Nombre:</p>
              </div>
            </div>
            <div className="row">
              <div className="col s2">
                <p>Localidad:</p>
              </div>
            </div>
            <div className="row">
              <div className="col s2">
                <p>Provincia:</p>
              </div>
            </div>
            <div className="row">
              <div className="col s2">
                <p>Monto minimo:</p>
              </div>
              <div className="col s5">
                <input type="number" id="costo" name="costo" required onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="row">
              <div className="col s2">
                <p>Semana de reserva:</p>
              </div>
              <div className="col s5">
                <input type="date" id="semana_reserva" name="semana_reserva" required onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="row">
             <div className="col s2">
                <button className="indigo accent-1 left" style={{ color: 'black' }} type="submit">
                  Subastar
                </button>
              </div>
              <div className="col s2">
               <Link to="/propiedades" className="indigo accent-1 left" style={{ color: 'black' }} type="button">
                      Volver atrás
               </Link>
            </div>
            </div>
            </form>
            </div>
          </div>
        </div>
    )
  }
}
export default FormAgregarSubasta;
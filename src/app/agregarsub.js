import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class FormAgregarSubasta extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
        propiedad: {},
        semanas: [],
        subastas:[],
    }
    this.handleChange = this.handleChange.bind(this);
    this.addSubasta = this.addSubasta.bind(this);
  }
  fetchSemanas(){
    fetch(`/api/semanas/`)
        .then(res => res.json())
        .then(data => {
            this.setState({semanas: data})
        })
        console.log(this.state.semanas)
  }
  fetchSubastas(){
    fetch(`/api/subastas`)
        .then(res => res.json())
        .then(data => {
            this.setState({subastas: data})
        })
        console.log(this.state.subastas)
  }
  componentDidMount(){
    fetch(`/api/propiedad/${this.props.match.params.propId}`)
        .then(res => res.json())
        .then(data => {
            this.setState({propiedad: data})
        })
        console.log(this.state)
   this.fetchSemanas()
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addSubasta(e,semana_id) {
      fetch(`/api/subasta/${semana_id}`, {
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
          this.setState({monto_minimo: ''});
          this.fetchSubastas();
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
              <div className="col s5">
                <p>Nombre: {this.state.propiedad.nombre}</p>
              </div>
            </div>
            <div className="row">
              <div className="col s5">
                <p>Localidad: {this.state.propiedad.localidad}</p>
              </div>
            </div>
            <div className="row">
              <div className="col s5">
                <p>Provincia: {this.state.propiedad.provincia}</p>
              </div>
            </div>
            <div className="row">
               <table className="striped bordered">
                 <thead className="grey">
                   <tr>
                     <th>Fecha de inicio</th>
                     <th>monto_minimo</th>
                     <th></th>
                   </tr>
                 </thead>
                 <tbody className="white">
                 {
                   this.state.semanas.map(semana => {
                      return (
                      <form onSubmit={this.addSubasta(semana._id)}>
                        <tr key={semana._id}>
                          <td>{semana.fecha_inicio}</td>
                          <td><input type="number" name="monto_minimo" id="monto_minimo"></input></td>
                          <td><button type="submit">Subastar</button></td>
                        </tr>
                      </form>
                      )
                    })
                }
                </tbody>
               </table>
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
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
class FormAgregarSubasta extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      reservas: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.addSubasta = this.addSubasta.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  fetchReservas() {
    fetch(`/api/reserva/${this.props.match.params.propId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ reservas: data }),
          console.log(this.state.reservas)
      })
  }
  addSubasta(e, semana_id) {
    e.preventDefault();
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
        M.toast({ html: 'Subasta guardada' });
        this.setState({ monto_minimo: '' });
        this.fetchSubastas();
      })
      .catch(err => console.error(err));

  }
  componentDidMount() {
    this.fetchReservas()
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
        <div>
          <div className="row">
            <table className="striped bordered">
              <thead className="grey">
                <tr>
                  <th>Fecha de inicio</th>
                  <th>Monto minimo</th>
                </tr>
              </thead>
              <tbody className="white">
                {
                  this.state.reservas.map(reserva => {
                    return (
                      <tr key={reserva.id}>
                        <td>{reserva.semana_reserva}</td>
                        <td>
                          <form onSubmit={(e) => this.addSubasta(e, reserva.semana_reserva)}>
                            <div className="col s5">
                              <input type="number" name="monto_minimo" id="monto_minimo" required onChange={this.handleChange}></input>
                            </div>
                            <div className="col s3">
                              <button type="submit">Subastar</button>
                            </div>
                          </form>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col s2">
              <Link to="/propiedades" className="indigo accent-1 left" style={{ color: 'black' }} type="button">
                Volver atrás
               </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FormAgregarSubasta;
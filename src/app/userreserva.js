import React, { Component } from 'react'
export default class Userreserva extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  componentDidMount() {
    fetch(`/api/reserva/:${this.props.match.params.propId}/reserva`)
      .then(res => res.json())
      .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <div className="row">
          {
            data.map(reserva => {
              return (
                <div className="col s4">
                  <div className="card">
                    <form>
                      <p>Semana de reserva: {reserva.semana_reserva}</p>
                      <button type="submit">Reservar</button>
                    </form>
                  </div>
                </div>
              )
            }
            )}
        </div>
      </div>
    )
  }
}
import React, {Component} from 'react'
import Navbaruser from './components/Navbaruser'
export default class Userreserva extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservas: [],
    }
  }
fetchReservas() {
  fetch(`/api/reserva/${this.props.match.params.propId}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ reservas: data }),
        console.log(this.state.reservas)
    })
}
componentDidMount(){
    this.fetchReservas()
}
    render(){
        return (
            <div>
               <Navbaruser/>
               <h3>Fechas disponibles</h3>
               <div className="row">
                 {
                   this.state.reservas.map(reserva =>{
                     return(
                       <div key={reserva.id}>
                         <div className="col s4">
                           <div className="card">
                             <form>
                                <p>Semana disponible: {reserva.semana_reserva}</p>
                                <button>Reservar</button>
                              </form>
                            </div>
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
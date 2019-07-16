import React, {Component} from 'react'
import Navbaruser from './components/Navbaruser'
export default class Userreserva extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semana:[],
      reservas: [],
      pago:[],
    }
    this.addPago = this.addPago.bind(this);
  }
addPago(id_reserva){
  fetch(`/api/pago/${id_reserva}/5d2b93a2f4dd6723785167fa`, {
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
      M.toast({ html: 'El pago fue realizado' });
      this.setState({ _id: ''});
    })
    .catch(err => console.error(err));
}
fetchReservas() {
  fetch(`/api/reserva/${this.props.match.params.propId}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ reservas: data }),
        console.log(this.state.reservas)
    })
}
/*fetchSemana(id_semana) {
  fetch(`/api/semana/${id_semana}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ reservas: data }),
        console.log(this.state.reservas)
    })
}
semana(id_semana){
  this.fetchSemana(id_semana)
    return(
      <div>
       {id_semana.fecha_inicio}
      </div>
    )
}*/
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
                           <div className="card green lighten-4">
                             <form>
                                     <p>Semana disponible: {reserva.semana_reserva}</p>
                                    <button onClick={() => this.addPago(reserva.semana_reserva)} className="btn waves-effect waves-teal">Reservar</button>
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
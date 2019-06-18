import React, {Component} from 'react'
import Navbarpremium from './components/Navbarpremium'
class Subastauser extends Component {
    constructor() {
        super();
        this.state = {
          subastas: [],
          _id: ''
        }
      }
      componentDidMount() {
        this.fetchSubastas()
      }
      fetchSubastas() {
        fetch('api/subasta')
          .then(res => res.json())
          .then(data => {
            this.setState({ subastas: data }),
              console.log(this.state.subastas)
          })
      }
    render(){
        return (
            <div>
               <Navbarpremium/>
               <div className="row">
               {
                   this.state.subastas.map(subasta => {
                    return (
                       <div>
                           <div key={subasta.id}>
                               <form>
                               <div className="col s4">
                                   <div className="card">
                                       <div className="card blue-grey darken-1">
                                           <div className="card-content white-text">
                                               {/*<p>Nombre: {subasta._id.nombre}</p>
                                               <p>Locolidad: {subasta._id.localidad}</p>
                                               <p>Provincia: {subasta._id.provincia}</p>
                                               <p>Descripcion: {subasta._id.descripcion}</p>*/}
                                               <p>Semana de reserva:{subasta.semana_reserva}</p>
                                               <div className="row">
                                                   <div className="col s6">
                                                       <input type="number"></input>
                                                   </div>
                                                   <div className="col s2">
                                                       <button type="submit" className=" indigo accent-1 left">Pujar</button>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               </form>
                           </div>
                       </div>
                    )
                   })
               }
               </div>
            </div>   
        )
    }
}
export default Subastauser
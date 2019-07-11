import React, {Component} from 'react'
import Navbaruser from './components/Navbaruser'
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
               <Navbaruser/>
               <div className="row">
               {
                   this.state.subastas.map(subasta => {
                    return (
                       <div>
                           <div key={subasta.id}>
                               <form>
                               <div className="col s4">
                                   <div className="card">
                                      <p>Semana de reserva: {subasta.semana_reserva.fecha_inicio}</p>
                                      <p>Mayor postor: {}</p>
                                      <p>Monto actual: ${}</p>
                                      <p>Para pujar ingrese un monto más alto que el actual</p>
                                      <div className="row">
                                        <div className="col s3">
                                           <input type="text"></input>
                                        </div>
                                        <div className="col s3">
                                          <button  className=" indigo accent-1 left">Pujar</button>
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
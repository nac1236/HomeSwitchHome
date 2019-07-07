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
                                       <div className="card-image waves-effect waves-block waves-light">
                                           <img className="activator" src="https://www.guatemala.com/fotos/201710/Lugares-turisticos-de-Guatemala-que-debes-conocer-segun-NatGeo-2-885x500.jpg"/>
                                       </div>
                                       <div className="card-content ">
                                             <span className="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>
                                       </div>
                                       <div className="card-reveal">
                                           <span className="card-title grey-text text-darken-4">{}<i class="material-icons right">close</i></span>
                                                   <p>Localidad: {}</p>
                                                   <p>Provincia: {}</p>
                                                   <p>Descripcion: {}</p>
                                                   <p>Monto actual: ${}</p>
                                                   <p>Semana de reserva: {subasta.semana_reserva.fecha_inicio}</p>
                                                   <div className="col s6">
                                                     <input type="text"></input>
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
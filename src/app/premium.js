import React, {Component} from 'react'
import Navbarpremium from './components/Navbarpremium'
class Premium extends Component {
    constructor() {
        super();
        this.state = {
          propiedades: [],
          _id: ''
        }
      }
      componentDidMount() {
        this.fetchPropiedades()
      }
      fetchPropiedades() {
        fetch('api/propiedades')
          .then(res => res.json())
          .then(data => {
            this.setState({ propiedades: data }),
              console.log(this.state.propiedades)
          })
      }
    render(){
        return (
            <div>
               <Navbarpremium/>
               <div className="row">
                   <div className=" col s3">
                       <p>Nombre</p>
                       <input type="text"></input>
                   </div>
                   <div className=" col s3">
                       <p>Locolidad</p>
                       <input type="text"></input>
                   </div>
                   <div className=" col s3">
                       <p>Provinicia</p>
                       <input type="text"></input>
                   </div>
                </div>
               <div className="row">
               {
                   this.state.propiedades.map(propiedad => {
                    return (
                       <div>
                           <div key={propiedad.id}>
                               <div className="col s4">
                                   <div className="card">
                                       <div className="card blue-grey darken-1">
                                           <div className="card-content white-text">
                                               <p>Nombre: {propiedad.nombre}</p>
                                               <p>Locolidad: {propiedad.localidad}</p>
                                               <p>Provincia: {propiedad.provincia}</p>
                                               <p>Descripcion: {propiedad.descripcion}</p>
                                               {/*<p>Precio: {propiedad.costo}</p>*/}
                                               <div className="row">
                                                   <div className="col s7">
                                                       <input type="date"></input>
                                                   </div>                                                
                                               </div>
                                               <button  className=" indigo accent-1 left">Reservar</button>
                                           </div>
                                       </div>
                                   </div>
                               </div>
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
export default Premium
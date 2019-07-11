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
                   <div className=" col s1">
                       <p>Nombre:</p>
                   </div>
                   <div className=" col s3">
                       <input type="text"></input>
                   </div>
                   <div className=" col s1">
                       <p>Localidad:</p>
                   </div>
                   <div className=" col s3">
                       <input type="text"></input>
                   </div>
                   <div className=" col s1">
                       <p>Provinicia:</p>
                   </div>
                   <div className=" col s3">
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
                                       <div className="card-image waves-effect waves-block waves-light">
                                           <img className="activator" src="https://www.guatemala.com/fotos/201710/Lugares-turisticos-de-Guatemala-que-debes-conocer-segun-NatGeo-2-885x500.jpg"/>
                                       </div>
                                       <div className="card-content ">
                                             <span className="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>
                                       </div>
                                       <div className="card-reveal">
                                           <span className="card-title grey-text text-darken-4">{propiedad.nombre}<i class="material-icons right">close</i></span>
                                                   <p>Localidad: {propiedad.localidad}</p>
                                                   <p>Provincia: {propiedad.provincia}</p>
                                                   <p>Descripcion: {propiedad.descripcion}</p>
                                                   <p>Precio por semana: ${propiedad.costo}</p>
                                                   <div className="col s6">
                                                     <input type="date" step="7"  min="2019-04-14"></input>
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
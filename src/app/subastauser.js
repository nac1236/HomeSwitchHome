import React, {Component} from 'react'
import Navbaruser from './components/Navbaruser'
class Subastauser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          subastas: [],
        }
      }
      componentDidMount() {
        this.fetchSubastas()
      }
    
      fetchSubastas() {
        fetch(`/api/subastas/${this.props.match.params.propId}`)
          .then(res => res.json())
          .then(data => {
            this.setState({ subastas: data }),
              console.log(this.state.subastas)
          })
      }
      addPuja(e, subasta_id){
        fetch(`/api/puja/${subasta_id}/userId`,{
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
          M.toast({ html: 'Realizaste una puja' });
          this.setState({ monto_actual:'' });
          })
         .catch(err => console.error(err));
         e.preventDefault();
      }
    render(){
        return (
            <div>
               <Navbaruser/>
               <h3>Subastas activas</h3>
               <div className="row">
               {
                   this.state.subastas.map(subasta => {
                    return (
                       <div>
                           <div key={subasta.id}>
                               <form onSubmit={()=>this.addPuja(subasta.id)}>
                               <div className="col s4">
                                   <div className="card">
                                      <p>Semana de reserva: {}</p>
                                      <p>Mayor postor: {}</p>
                                      <p>Monto actual: ${}</p>
                                      <p>Para pujar ingrese un monto más alto que el actual</p>
                                      <div className="row">
                                        <div className="col s3">
                                           <input type="text" id="monto_actual" name="monto_actual"></input>
                                        </div>
                                        <div className="col s3">
                                          <button type="submit" className="btn waves-effect waves-teal">Pujar</button>
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
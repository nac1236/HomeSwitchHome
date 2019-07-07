import React, { Component } from 'react';
class ListaDeHotsales extends Component{
  constructor() {
    super();
    this.state = {
      hotsales: [],
    }
  }
  componentDidMount() {
    this.fetchHotsales()
  }
  fetchHotsales() {
    fetch('/api/hotsales')
      .then(res => res.json())
      .then(data => {
        this.setState({ hotsales: data }),
          console.log(this.state.hotsales)
      })
  }
    render() {
      return (
         <div>
           <table className="striped bordered">
             <thead className="grey">
               <tr>
                 <th>Nombre de la propiedad</th>
                 <th>Localidad de la propiedad</th>
                 <th>Provincia de la propiedad</th>
                 <th>Precio</th>
                 <th>Semana de la reserva</th>
                 <th>Fecha de finalización</th>
               </tr>
              </thead>
              <tbody className="white">
              {
               this.state.hotsales.map(hotsale => {
                 return (
                   <tr key={hotsale.id}>
                     <td>{/*hotsale.semana_reserva.propiedad_id.nombre*/}</td>
                     <td>{/*hotsale.semana_reserva.propiedad_id.localidad*/}</td>
                     <td>{/*hotsale.semana_reserva.propiedad_id.provincia*/}</td>
                     <td>${hotsale.costo}</td>
                     <td>{/*hotsale.semana_reserva.fecha_inicio*/}</td>
                     <td>{}</td>
                     <td><button className=" indigo accent-1">Terminar hotsale</button></td>
                   </tr>
                 )
               })
              }
              </tbody>
            </table>
           </div>
      )
    }
  }
export default ListaDeHotsales
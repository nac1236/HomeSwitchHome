import React, { Component } from 'react';
class ListaDeSubastas extends Component{
  constructor() {
    super();
    this.state = {
      subastas: [],
    }
  }
  componentDidMount() {
    this.fetchSubastas()
  }

  fetchSubastas() {
    fetch('api/subastas')
      .then(res => res.json())
      .then(data => {
        this.setState({ subastas: data }),
          console.log(this.state.subastas)
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
                 <th>Monto actual</th>
                 <th>Semana de la reserva</th>
                 <th>Fecha de finalización</th>
                 <th></th>
               </tr>
              </thead>
              <tbody className="white">
              {
               this.state.subastas.map(subasta => {
                 return (
                   <tr key={subasta.id}>
                     <td>{/*subasta.semana_reserva.propiedad_id.nombre*/}</td>
                     <td>{/*subasta.semana_reserva.propiedad_id.localidad*/}</td>
                     <td>{/*subasta.semana_reserva.propiedad_id.provincia*/}</td>
                     <td>${subasta.monto_minimo}</td>
                     <td>{/*subasta.semana_reserva.fecha_inicio*/}</td>
                     <td>{subasta.fecha_finalizacion}</td>
                     <td><button className=" indigo accent-1">Finalizar subasta</button></td>
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
export default ListaDeSubastas

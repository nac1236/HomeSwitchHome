import React, { Component } from 'react';
class ListaDeSubastas extends Component{
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
                 <th>Fecha de finalziacion</th>
               </tr>
              </thead>
              <tbody className="white">
              {
               this.state.subastas.map(subasta => {
                 return (
                   <tr key={subasta.id}>
                     <td>{}</td>
                     <td>{}</td>
                     <td>{}</td>
                     <td>{}</td>
                     <td>{subasta.fecha_reserva}</td>
                     <td>{subasta.fecha_finalizacion}</td>
                     <td><button className=" indigo accent-1">Terminar subasta</button></td>
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

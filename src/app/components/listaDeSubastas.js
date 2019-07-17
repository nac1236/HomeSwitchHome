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
                 <th>Monto actual</th>
                 <th>Fecha de finalización</th>
                 <th></th>
               </tr>
              </thead>
              <tbody className="white">
              {
               this.state.subastas.map(subasta => {
                 return (
                   <tr key={subasta.id}>
                     
                     <td>$0</td>
                     
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

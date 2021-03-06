import React, { Component } from 'react';
class PaginaPropiedades extends Component {

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

  componentDidUpdate() {
    this.fetchPropiedades()
  }

  deletePropiedades(id) {
    if(confirm('¿Deseas eliminar esta propiedad?')) {
      fetch(`/api/propiedad/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({html: 'Propiedad eliminada'});
          this.fetchPropiedades();
        });
    }
  }

  fetchPropiedades() {
    fetch('api/props')
      .then(res => res.json())
      .then(data => {
        this.setState({ propiedades: data }),
          console.log(this.state.propiedades)
      })
  }

  render() {
    return (
       <div>
         <table className="striped bordered">
           <thead className="grey">
             <tr>
               <th>Nombre</th>
               <th>Localidad</th>
               <th>Provincia</th>
               <th>Descripcion</th>
               <th>Precio</th>
               <th></th>
               <th></th>
               <th></th>
             </tr>
           </thead>
           <tbody className="white">
           {
             this.state.propiedades.map(propiedad => {
                return (
                 <tr key={propiedad._id}>
                    <td>{propiedad.nombre}</td>
                    <td>{propiedad.localidad}</td>
                    <td>{propiedad.provincia}</td>
                    <td>{propiedad.descripcion}</td>
                    <td>{/*propiedad.costo*/}</td>
                    <td><button className=" indigo accent-1 left"  onClick={() => this.deletePropiedades(propiedad._id)}>Eliminar</button></td>
                    <td><button className=" indigo accent-1 left">Modificar</button></td>
                    <td><button className=" indigo accent-1 left">Subastar</button></td>
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
export default PaginaPropiedades
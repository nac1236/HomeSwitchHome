import React, { Component } from 'react'

export default class ListaPropiedades extends Component {
    constructor(){
        super()
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
                            props.propiedades.map(propiedad => {
                                return (
                                    <tr key={propiedad._id}>
                                        <td>{propiedad.nombre}</td>
                                        <td>{propiedad.localidad}</td>
                                        <td>{propiedad.provincia}</td>
                                        <td>{propiedad.descripcion}</td>
                                        <td>{/*propiedad.costo*/}</td>
                                        <td><button className=" indigo accent-1 left" onClick={() => this.deletePropiedades(propiedad._id)}>Eliminar</button></td>
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

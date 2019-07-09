import React, { Component } from 'react'

export default class ListaSubastas extends Component {
    constructor(){
        super(props)
    }

    render() {
        return (
            <div>
                <table className="striped bordered">
                    <thead className="grey">
                        <tr>
                            <th>Nombre de la propiedad</th>
                            <th>Monto minimo</th>
                            <th>Fecha de creacion</th>
                            <th>Fecha de finalziacion</th>
                        </tr>
                    </thead>
                    <tbody className="white">
                        {
                            props.subastas.map(subasta => {
                                return (
                                    <tr key={subasta.id}>
                                        <td>{}</td>
                                        <td>{subasta.monto_minimo}</td>
                                        <td>{subasta.fecha_creacion}</td>
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

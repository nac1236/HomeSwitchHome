import React, { Component } from 'react'

export default class DetallePropiedad extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    componentDidMount(){
        fetch(`/api/propiedad/${this.props.match.params.propId}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>
        
            </div>
        )
    }
}

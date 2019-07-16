import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class TokenDeAcceso extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accessReal: "admin",
            accessInput: "",
            isLogged: "false"
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    adminLogIn = (e) => {
        e.preventDefault()
        if (this.state.accessInput === this.state.accessReal) {
            this.props.history.push('/home')
        } else {
            M.toast({ html: 'Token inválido.' });
        }
    }

    render() {
        return (

            <div className="container">

                <div className="card grey lighten-1">
                    <h1>Ingresá tu código de acceso</h1>
                    <form onSubmit={(e) => this.adminLogIn(e)}>
                        <label>Código</label>
                        <input type="password" id="accesstoken" name="accessInput" value={this.state.accessInput} onChange={this.handleInputChange} required></input>
                        <button className="btn waves-effect waves-teal">
                            <input type="submit" value="Entrar"></input>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

import React from 'react'
import { Link } from 'react-router-dom'
import FormAgregarUser from '../registraruser'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/propiedades_disponibles');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <div>
                <div>
                    <nav className=" indigo accent-1">
                        <form onSubmit={this.onSubmit}>
                            <ul>

                                <li className="left hide-on-med-and-down"><Link to="/home">Admin</Link></li>
                                <li className="left hide-on-med-and-down"><Link to="/propiedades_disponibles">Admin</Link></li>
                                <li className="left hide-on-med-and-down"><input type="password" id="passadmin"></input></li>
                                <li className="right hide-on-med-and-down"><input type="submit" value="Iniciar sesión"></input></li>
                                <li className="right hide-on-med-and-down"><input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required id="contraseña_login" size="12" rows="3"></input></li>
                                <li className="right hide-on-med-and-down"><label style={{ color: 'white' }}>Contraseña: </label></li>
                                <li className="right hide-on-med-and-down"><input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required id="correo" size="12" rows="3"></input></li>
                                <li className="right hide-on-med-and-down"><label style={{ color: 'white' }}>Correo electrónico: </label></li>

                            </ul>
                        </form>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s6 left">
                            <img src='.../logos/HSH-Complete.svg' />
                        </div>
                        <div className="col s6 right">
                            <FormAgregarUser />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login

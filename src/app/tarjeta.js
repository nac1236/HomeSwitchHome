import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
class Tarjeta extends Component {
    constructor(props) {
        super(props);
        this.state={
            tarjeta:[]
        }
        this.addTarjeta = this.addTarjeta.bind(this);
      } 
addTarjeta(e) {
     fetch(`/api/tarjeta/${this.props.match.params.propId}`, {
     method: 'POST',
     body: JSON.stringify(this.state),
     headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
     }
    })
    .then(res => res.json())
    .then(data => {
    console.log(data);
    M.toast({ html: 'Tarjeta registrada' });
    this.setState({ _id: '', numero: '' });
    })
    .catch(err => console.error(err));
    e.preventDefault();
    }
render(){
    return(
        <div className="container">
            <h3 align="center">HomeSwichHome</h3>
            <div className="container">
            <div className="row">
                <div className="col s3">
                </div>
                <div className="col s5">
                    <p align="center">Ingrese su tarjeta de credito para poder registrarte</p>
                </div>
            </div>
            <form onSubmit={this.addTarjeta}>
                <div className="row">
                    <div className="col s3">
                    </div>
                    <div className="col s5">
                        <input align="center" type="text" name="numero" id="numero" required ></input>
                    </div>
                    <div>
                        <button align="center" type="submit">Registrar</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}
}
export default Tarjeta
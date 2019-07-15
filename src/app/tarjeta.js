import React, {Component} from 'react'
class Tarjeta extends Component {
    constructor(props) {
        super(props);
        this.state={
            tarjeta:{}
        }
      } 
addPropiedades(e) {
     fetch(`/api/tarjeta/:usuario_id`, {
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
    })
    .catch(err => console.error(err));
    e.preventDefault();
    }
render(){
    return(
        <div className="container">
            <div className="row">
                <div>
                    <p>Ingrese su tarjeta de credito para poder registrarte</p>
                </div>
            </div>
            <form onSubmit={this.addTarjeta}>
                <div className="row">
                    <div>
                        <input type="text" name="numero" id="numero" ></input>
                    </div>
                    <div>
                        <button type="submit">Registrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
}
export default Tarjeta
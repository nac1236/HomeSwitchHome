import React, {Component} from 'react'
import Navbaruser from './components/Navbaruser'
function premium() {
    alert("Para ser premium acercate a nuestra sucursal o envía un mail a homeswitchhome@hotmail.com")
}
class Perfil extends Component {
    constructor() {
        super()
        this.state = {
            tarjetas:[],
            usuario:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTarjetas = this.addTarjetas.bind(this);
      }
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
      fetchTarjetas() {
        fetch(`/api/tarjetas`)
          .then(res => res.json())
          .then(data => {
            this.setState({ tarjetas: data }),
              console.log(this.state.tarjetas)
          })
      }
      componentDidMount(){
        this.fetchTarjetas()
      }
      editNombre(id) {
        fetch(`/api/usuario/nombre/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            nombre: this.state.nombre,
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            window.M.toast({html: 'Nombre actualizado'});
            this.setState({ nombre: ''});
          });  
    }
    editPassoword(id) {
        fetch(`/api/usuario/password/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            nombre: this.state.password,
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            window.M.toast({html: 'Contraseña actualizada'});
            this.setState({ password: ''});
          });  
    }
    editApellido(id) {
        fetch(`/api/usuario/apellido/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            nombre: this.state.apellido,
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            window.M.toast({html: 'Apellido actualizado'});
            this.setState({ apellido: ''});
          });  
    }
    addTarjetas(e){
        fetch('/api/tarjeta/5d2b93a2f4dd6723785167fa', {
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
              M.toast({ html: 'Tarjeta guardada' });
              this.setState({ numero: ''});
              this.fetchTarjetas();
            })
            .catch(err => console.error(err));
          e.preventDefault();
    }
    render() {
        return( 
            <div>
                <Navbaruser/>
                <br></br>
                <div className="row">
                    <div className="col s6">
                        <form>
                            <div className="row">
                                <div className="col s2">
                                   <p>Nombre:</p>
                                </div>
                                <div className="col s5">
                                   <input type="text" name="nombre" id="apellido" onChange={this.handleChange}></input>
                                </div>
                                <div className="col s5">
                                    <button  className=" indigo accent-1 left"><i className="tyni material-icons">edit</i></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s2">
                                    <p>Apellido:</p>
                                </div>
                                <div className="col s5">
                                    <input type="text" name="apellido" id="apellido" onChange={this.handleChange}></input>
                                </div>
                                <div className="col s5">
                                     <button  className=" indigo accent-1 left"><i className="tyni material-icons">edit</i></button>
                                </div>
                            </div>
                            <p>Para cambiar la contraseña ingrese su contraseña y despues ingrese su nueva contraseña</p>
                            <div className="row">
                                <div className="col s2">
                                    <p>Contraseña:</p>
                                </div>
                                <div className="col s5">
                                    <input type="password" id="oldpassword" name="oldpassword" onChange={this.handleChange}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s2">
                                    <p>Nueva contraseña:</p>
                                </div>
                                <div className="col s5">
                                    <input type="password" name="password" id="password" onChange={this.handleChange}></input>
                                </div>
                                <div className="col s5">
                                     <button  className=" indigo accent-1 left"><i className="tyni material-icons">edit</i></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6">
                                   <p>Tipo de usuario:</p>
                                   <button  className=" indigo accent-1 left" onClick={() => premium()}>¡Quiero ser Premium!</button>
                                </div>
                                <div className="col s3">
                                    <p>Creditos:</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col s6">
                        <form>
                            <p>Numero de tarjeta activa:</p>
                            <div className="row">
                                <table className="striped bordered">
                                    <thead className="grey">
                                        <tr>
                                            <th>Tarjetas registradas</th>
                                        </tr>
                                    </thead>
                                    <tbody className="white">
                                        {
                                            this.state.tarjetas.map(tarjeta =>{
                                                return(
                                                    <tr key={tarjeta.id}>
                                                        <td>
                                                            <div className="col s3">
                                                                {tarjeta.numero}
                                                            </div>
                                                            <div className="col s4">
                                                                <button className=" indigo accent-1">Cambiar tarjeta activa</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </form>
                        <form onSubmit={this.addTarjetas}>
                            <p>Registrar nueva tarjeta</p>
                            <div className="row"> 
                                <div className="col s5">
                                    <input type="text" placeholder="Numero de tarjeta" required></input>
                                </div>
                                <div className="col s4">
                                    <button type="submit" className=" indigo accent-1 left">Registrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Perfil
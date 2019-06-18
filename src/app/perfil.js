import React, {Component} from 'react'
import Navbarpremium from './components/Navbarpremium'
function premium() {
    alert("En unos días podras usar todos los beneficio que posee un premium")
}
class Perfil extends Component {
    render() {
        return( 
            <div>
                <Navbarpremium/>
                <div className="row">
                    <div className="col s2">
                        <img src="https://www.softzone.es/app/uploads/2018/04/guest.png" width="100" height="100"/>
                        <input type="file"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <form>
                            <div className="row">
                                <div className="col s2">
                                   <p>Nombre:</p>
                                </div>
                                <div className="col s5">
                                   <input type="text"></input>
                                </div>
                                <div className="col s5">
                                    <button><i className="tyni material-icons">edit</i></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s2">
                                    <p>Apellido:</p>
                                </div>
                                <div className="col s5">
                                    <input type="text"></input>
                                </div>
                                <div className="col s5">
                                     <button><i className="tyni material-icons">edit</i></button>
                                </div>
                            </div>
                            <p>Para cambiar la contraseña ingrese su contraseña y despues ingrese su nueva contraseña</p>
                            <div className="row">
                                <div className="col s2">
                                    <p>Contraseña:</p>
                                </div>
                                <div className="col s5">
                                    <input type="password"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s2">
                                    <p>Nueva contraseña:</p>
                                </div>
                                <div className="col s5">
                                    <input type="password"></input>
                                </div>
                                <div className="col s5">
                                     <button><i className="tyni material-icons">edit</i></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6">
                                   <p>Tipo de usuario:</p>
                                   <button onClick="premium()">¡Quiero ser Premium!</button>
                                </div>
                                <div className="col s3">
                                    <p>Creditos:</p>
                                    <button>Comprar creditos</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col s6">
                        <form>
                            <h5>Datos de la tarjeta</h5>
                            <p>Numero de tarjeta:</p>
                            <p>Titular:</p>
                            <button>Cambiar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Perfil
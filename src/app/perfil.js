import React, {Component} from 'react'
import Navbarpremium from './components/Navbarpremium'
function premium() {
    alert("Para ser premium acercate a nuestra sucursal o envía un mail a homeswitchhome@hotmail.com")
}
class Perfil extends Component {
    render() {
        return( 
            <div>
                <Navbarpremium/>
                <br></br>
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
                                    <button  className=" indigo accent-1 left"><i className="tyni material-icons">edit</i></button>
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
                                     <button  className=" indigo accent-1 left"><i className="tyni material-icons">edit</i></button>
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
                            <p>Cambiar de tarjeta activa</p>
                            <div className="row">
                                <div className="col s5">
                                    <input type="number" placeholder="Numero de tarjeta"></input>
                                </div>
                                <div className="col s4">
                                    <button  className=" indigo accent-1 left">Cambiar de tarjeta</button>
                                </div>
                            </div>
                        </form>
                        <form>
                            <p>Registrar nueva tarjeta</p>
                            <div className="row"> 
                                <div className="col s5">
                                    <input type="number" placeholder="Numero de tarjeta"></input>
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
export default class ListaDeReserva extends Component {
        constructor(props) {
            super(props)
            console.log(props)
            this.state = {
                reservas:[],
                subastas:[]
            }
        this.handleChange = this.handleChange.bind(this);
        this.addSubasta = this.addSubasta.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
    componentDidMount(){
       this.fetchReservas()
      }
    fetchSubastas(){
         fetch(`/api/subastas`)
             .then(res => res.json())
             .then(data => {
                 this.setState({subastas: data})
            })
            console.log(this.state.subastas)
      }
      fetchReservas() {
        fetch(`/api/reserva/${this.props.match.params.propId}`)
          .then(res => res.json())
          .then(data => {
            this.setState({ reservas: data }),
              console.log(this.state.reservas)
          })
      }
    addSubasta(semana_id) {
        fetch(`/api/subasta/${semana_id}`, {
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
            M.toast({html: 'Subasta guardada'});
            this.setState({monto_minimo: ''});
            this.fetchSubastas();
          })
          .catch(err => console.error(err));
    }
render(){
    return(
        <div className="row">
         <table className="striped bordered">
              <thead className="grey">
                 <tr>
                     <th>Fecha de inicio</th>
                     <th>Monto minimo</th>
                     <th></th>
                 </tr>
               </thead>
               <tbody className="white">
               {
                 this.state.reservas.map(reserva =>{
                     return (
                     <tr key={reserva.id}>
                             <form onSubmit={this.addSubasta(`${reserva.semana_reserva}`)}>
                                 <td>{}</td>
                                 <td><input type="number" name="monto_minimo" id="monto_minimo" required onChange={this.handleChange}></input></td>
                                 <td><button type="submit">Subastar</button></td>
                             </form>
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
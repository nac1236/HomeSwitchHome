var cron = require('node-cron');

const ctrlSemana = require('../consultas/semanas')
const ctrlProp = require('../consultas/propiedades')
const Propiedad = require('../models/propiedades')

// const queryAllPropiedades = () => {//..AllPropiedades
//   //Where Propiedad is you mongoose user model
//   Propiedad.find({} , (err, propiedad) => {
//       if(err){} //do something...

//       Propiedad.map(propiedad => {
//           //Do somethign with the propiedad
//         console.log('Entra')

//       })
//   })
// }
 
cron.schedule('1 * * * * *', () => {  //deberia ponerlo para cada 15 dias
  console.log('running a task every 10 segundos')
  Propiedad.find(//hice una prueba y crea semanas para todas las propiedades asi como esta
    // aca tenia un campo para marcar si estaba verificado, podria usarlo...
  ).stream().on('data', function (propiedades) {
    const fecha = new Date
    fecha.setMonth(fecha.getMonth() + 7) //crea para dentro de 7 meses, las semanas disponibles
    ctrlSemana.crearMes(propiedades._id,fecha.getFullYear(),fecha.getMonth())
    console.log("Entro al recorrido")
  }).on('end', function () {
    console.log("sent mail to all users")
});
 
});


  

  //Para todas las propiedades
//   recupero el ID 
//   Por cada propiedad (for){
//    por cada Mes en un intervalo a calcular(for)
//     ctrlSemana.crear(mes del intervalo)
//   }    


module.exports = cron
var cron = require('node-cron');

const ctrlSemana = require('../consultas/semanas')
const ctrlProp = require('../consultas/propiedades')
const Propiedad = require('../models/propiedades')
 
cron.schedule('10 * * * *', () => {
  console.log('running a task every 10 segundos');

  //propiedesPropiedad.find()

  //Para todas las propiedades
//   recupero el ID 
//   Por cada propiedad (for){
//    por cada Mes en un intervalo a calcular(for)
//     ctrlSemana.crear(mes del intervalo)
//   }      
});

module.exports = cron
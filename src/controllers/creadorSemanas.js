var cron = require('node-cron');
 
cron.schedule('10 * * * *', () => {
  console.log('running a task every 10 segundos');
  //Para todas las propiedades
//   recupero el ID 
//   Por cada propiedad (for){
//    por cada Mes en un intervalo a calcular(for)
//     crearMes(mes del intervalo)
//   }      
});
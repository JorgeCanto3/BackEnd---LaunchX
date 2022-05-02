/*Exportar una funcion/objto es asi:
    > module.exports.verbose
  Exportamos el contenido con el nombre "Verbose"
  
  module.exports hará que podamos llamar la funcion en otro script como :
    > const logger = require('.logger')
  
  y la podemos usar de la siguiente madera
    > logger.verbose("Heyyy!")
*/

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}
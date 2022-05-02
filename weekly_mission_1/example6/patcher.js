/*
-require('./logger.') nos dara el objeto creado
-require('./logger') .logger regresara la clase 

Aqui agregaremos una funcion más al objeto instanciado y no a la clase
*/
require('./logger').customMessage = function () {
    console.log('This is a new functionality')
}
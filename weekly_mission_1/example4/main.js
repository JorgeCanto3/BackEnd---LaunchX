const Logger = require('./logger') //LLamamos el módulo que contiene la clase

//Creacion de un Objeto
const dbLogger = new Logger('DB');
/*Creas un objeto nuevo, esto llama
por default el constructor de la clase*/
//Invocación del método
dbLogger.info('This is an informational message')

// Creacion de otro Objeto

const accesLogger = new Logger('Access');
accesLogger.verbose('This is a verbose message')
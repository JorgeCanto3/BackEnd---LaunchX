const logger = require('./logger')

//Ya podemos usar el objeto instacioado en el modulo logger

logger.log('This is an informational message')

/*
También puede instanciar uno nuevo de esta manera:
    const customlogger = new logger.constructor('Custom')
    customlogger.log('This is an informational message)
*/
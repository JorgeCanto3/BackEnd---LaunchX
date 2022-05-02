/*
Export default nos permite exportar esta clase e importarla

import Mylogger from './logger.js'
*/

export default class logger {
    constructor(name) {
        this.name = name
    }
    log(message) {
        console.log(`[${this.name}] ${message}`)
    }
}
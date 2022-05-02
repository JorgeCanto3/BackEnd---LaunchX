class logger {
    constructor(name) {
        //Creamos el objeto y en el podemos guardar los siguientes valores
        this.count = 0
        this.name = name
    }


    log(message) {
        this.count++
        //Se le aumenta el contador interno al llamar este método
        console.log('[' + this.name + ']' + message)
    }
}

module.exports = new logger('Default')
//Instalacion del objeto y se exporta

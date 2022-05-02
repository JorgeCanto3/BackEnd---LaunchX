class Logger {
    constructor(name) {//this es una variable para referencia el valor del contexto local de esta clase
        this.name = name //Esta variable se le conoce como atributo
    }

    /*Método
    This.name es la variable que se guarda en el contexto locaL
    message es una variable que se le pasa al ejecutar este método
    */
    info(message) {
        console.log(`[Objeto con nombre:${this.name}] info:${message}`)
    }
    //método
    verbose(message) {
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

//La clas se exporta en este módulo
module.exports = Logger
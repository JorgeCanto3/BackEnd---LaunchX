//Objeto con propiedades
let myCar = new Object(); //Objeto 
myCar.make = 'Ford';//Valor guaradado dentro del objeto
myCar.model = 'Mustang';
myCar.year = '1969';

console.log(myCar)//Imprimir Objeto desde la consola

//Declaracion de un objeto con variables locales y publicas

const myModule = (() => {

    //Variables de contexto local 
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1, 2, 3, 4]
    const baz = "Soy un valor que va a ser expuesto"

    //Variable para guardar las variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz,
        publicTHIgs: privateBar, privateFoo
    }

    //Exposicion de variables locales
    return exported
})()

console.log(myModule)


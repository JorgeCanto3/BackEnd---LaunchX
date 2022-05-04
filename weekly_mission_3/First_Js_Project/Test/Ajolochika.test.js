//Primer Test
const AjoloChika = require ('./../App/Ajolochika')

describe("Prueba", () => {
    test("Prueba 1", () => {
        //Usar codigo como deseamos utilizar
        const Sera_q_si = new AjoloChika("Este moloteco esta muy rapido")
         //Validar el resultado esperado
        expect(Sera_q_si.name).toBe("Este moloteco esta muy rapidoa");
    }) 
})
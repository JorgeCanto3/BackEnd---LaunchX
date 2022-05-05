const SuperHero = require('./../App/SuperHero')

describe("Prueba Dummy - SH", () => {
    test("Prueba Dummy 1 - SH", () => {
        //Usar codigo como deseamos utilizar
        const Capitan = new SuperHero("Chris Evans", "Capitan America", "Steve Rogers")
        //Validar el resultado esperado
        expect(Capitan.name).toBe("Chris Evans");
        expect(Capitan.sname).toBe("Capitan America");
        expect(Capitan.nname).toBe("Steve Rogers");
    })
})
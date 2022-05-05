const Spiderman = require('./../App/SpiderTest')

describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        //Codigo que queremos usar, exactamente igual
        //Queremos poder instanciar un objeto Spiderman con esta informacion
        const AndrewGarfield = new Spiderman("The best Spiderman", 31, "Andrew Garfield", 2, "Sony")
        
        //Valiidamos que obtengamos lo esperado
        expect(AndrewGarfield.quote).toBe("The best Spiderman")
        expect(AndrewGarfield.age).toBe(31)
        expect(AndrewGarfield.actor).toBe("Andrew Garfield")
        expect(AndrewGarfield.movies).toBe(2)
        expect(AndrewGarfield.The_worst_studio).toBe("Sony")
    })
})

const User = require('./../../App/Models/User')

describe("Unit Test for User class", () => {
    test('Create an user objetc', () => {
        //Llamamos el codiog para la app
        const usert = new User("1", "JorgeCanto", "Jorge", "Bio", "20 - 02 - 2022", "05-05-2022")
        
        //Validamos el codigo
        //Comparacion que va a igualar el valor construido con el esperado
        expect(usert.id).toBe("1")
        expect(usert.username).toBe("JorgeCanto")
        expect(usert.name).toBe("Jorge")
        expect(usert.bio).toBe("Bio")
        expect(usert.dateCreated).toBe("20 - 02 - 2022")
        expect(usert.lasUpdated).toBe("05-05-2022")
    })
})
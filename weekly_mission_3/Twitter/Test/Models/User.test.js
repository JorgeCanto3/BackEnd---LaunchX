const User = require('./../../App/Models/User')

describe("Unit Test for User class", () => {
    test('Create an user objetc', () => {
        //Llamamos el codiog para la app
        const usert = new User("1", "JorgeCanto", "Jorge", "Bio", "dateCreated", "lasUpdated")
        
        //Validamos el codigo
        //Comparacion que va a igualar el valor construido con el esperado
        expect(usert.id).toBe("1")
        expect(usert.username).toBe("JorgeCanto")
        expect(usert.name).toBe("Jorge")
        expect(usert.bio).toBe("Bio")
        expect(usert.dateCreated).not.toBeUndefined()
        expect(usert.lasUpdated).not.toBeUndefined()
    })
})
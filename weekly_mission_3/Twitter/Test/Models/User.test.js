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
    test('Add Getters', () => {
        const user = new User("1", "JorgeCanto3", "Jorge", "Bio")
        expect(user.getUsername).toBe("JorgeCanto3")
        expect(user.getbio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lasUpdated).not.toBeUndefined()
    })
    test('Add setters', () => {
        const user = new User("1", "JorgeCanto3", "Jorge", "Bio")
        user.setUsername = "Juan"
        expect(user.username).toBe("Juan")

        user.setBio = "Bio de Juan"
        expect(user.bio).toBe("Bio de Juan")
    })
})
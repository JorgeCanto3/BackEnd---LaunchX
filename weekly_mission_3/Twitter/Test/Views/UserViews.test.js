const User = require('./../../App/Models/User')
const UserView = require('./../../App/Views/UserView')

describe("Test for UserView", () => {
    test("1. Return an error object when try to creat a new user with a null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/Payload does not exist/)
    })
    test("2. Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = { username: null, name: 12, id: "id" }
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Need a valide value/)
    })
    test("3. Return an error object when try to create anew user with a payload with missing properties", () => {
        const payload = { username: "Username" }
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/Need a valide value/)
    })
    test("3. Return an error object when try to create anew user with a payload with missing properties", () => {
        const payload = { username: "Username", id: 1, name:"Name" }
        const result = UserView.createUser(payload)
        expect(result.name).toBe("Name")
        expect(result.username).toBe("Username")
        expect(result.id).toBe(1)
    })
})
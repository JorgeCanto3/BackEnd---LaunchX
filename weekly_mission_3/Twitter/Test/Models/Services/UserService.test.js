const UserService = require('./../../../App/Services/UserService')

describe('Test for UserService', () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "JorgeCanto", "Jorge")
        expect(user.username).toBe("JorgeCanto")
        expect(user.name).toBe("Jorge")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "JorgeCanto", "Jorge")
        const userInfoInList = UserService.getinfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("JorgeCanto")
        expect(userInfoInList[2]).toBe("Jorge")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
    test("3. Update Username", () => {
        const user = UserService.create(1, "JorgeCanto", "Jorge")
        UserService.updateUserUsername(user, "Jrge")
        expect(user.username).toBe("Jrge")
    })
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "JorgeCanto1", "Jorge")
        const user2 = UserService.create(1, "JorgeCanto2", "Jorge")
        const user3 = UserService.create(1, "JorgeCanto3", "Jorge")
        const usernames = UserService.getAllnames([user1, user2, user3])
        expect(usernames).toContain("JorgeCanto1")
        expect(usernames).toContain("JorgeCanto2")
        expect(usernames).toContain("JorgeCanto3")
    })
})
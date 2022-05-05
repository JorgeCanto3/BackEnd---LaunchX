const User = require('./../Models/User')

class UserService {
    static create(id, username, name) {
        return new User(id,username,name, "Sin bio")
    }  
    static getinfo(user) {
        return [user.id, user.username, user.name, user.bio]
    }
    static updateUserUsername(user, newUsername) {
        return user.username = newUsername
    }
    static getAllnames(user) {
        const usernames = user.map(user => user.username)
        return usernames
    }
}

module.exports = UserService

console.log(UserService)
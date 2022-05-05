class User {
    constructor(id, username, name, bio, dateCreated, lasUpdated) {
        this.id = id 
        this.username = username  
        this.name = name  
        this.bio = bio  
        this.dateCreated = new  Date()
        this.lasUpdated = new Date()  
    }
}

module.exports = User
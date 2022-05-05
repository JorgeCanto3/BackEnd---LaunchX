class User {
    constructor(id, username, name, bio, dateCreated, lasUpdated) {
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lasUpdated = new Date()
    }
    get getUsername() {
        return this.username
    }
    get getbio() {
        return this.bio
    }
    get getdateCreated() {
        return this.dateCreated
    }
    get getlasUpdated() {
        return this.lasUpdated
    }
    set setUsername(newUsername) {
        this.username = newUsername
    }
    set setBio(newBio) {
        this.bio = newBio
    }

}

module.exports = User
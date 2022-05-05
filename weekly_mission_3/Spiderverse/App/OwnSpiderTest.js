class Spiderman {
    constructor(WSpider, Age, Actor, Movies, Studio) {
        this.WSpider = WSpider
        this.Age = Age
        this.Actor = Actor
        this.Movies = Movies
        this.Studio = Studio
    }

    getInfo = function () {
        return `Hey, I'm ${this.Actor} from ${this.Studio} studio`
    }
}

module.exports = Spiderman
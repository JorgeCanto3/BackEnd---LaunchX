
class Pokemon {
    constructor(pokemonName) {
        this.pokemonName = pokemonName;
    }

    sayHello = () => {
        console.log(`Mi pokemon ${this.pokemonName} te saluda!!!`);
    }

    sayMessage = (Message) => {
        console.log(`Mi pokemon ${this.pokemonName} dice:${Message}`);
    }

}

module.exports = Pokemon;

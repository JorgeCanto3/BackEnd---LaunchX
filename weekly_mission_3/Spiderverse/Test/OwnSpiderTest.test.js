const Spiderman = require('./../App/OwnSpiderTest')

test('2) Use the method get info', () => {
    const TomHolland = new Spiderman ("Spiderman", 25, "Tom Holland", 5, "Marvel")
    expect (TomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
})
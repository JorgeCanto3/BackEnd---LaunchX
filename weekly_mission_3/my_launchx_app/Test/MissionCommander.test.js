const MissionCommander = require('./../App/MissionCommander')


describe("MissionCommander Test + Class", () => {
    test('1) Create a mission commander objet', () => {
        const commanderTest = new MissionCommander("Que pasa nena")
        expect(commanderTest.name).toBe("Que pasa nena");
    });
})
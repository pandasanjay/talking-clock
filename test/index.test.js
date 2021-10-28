import processTime from "../lib"

const testExpectation = {
    "00:00" : "Midnight",
    "00:05" : "Five past Twelve",
    "0:50"   : "Ten to One",
    "0:15"  : "Quarter past Twelve",
    "0:29"  : "Twenty Nine past Twelve",
    "00:30" : "Half past Twelve",
    "00:45" : "Quarter to One",
    "23:45" : "Quarter to Midnight",

    "23:00" : "Eleven o'clock",
    "20:05" : "Five past Eight",
    "12:51"   : "Nine to One",
    "1:15"  : "Quarter past One",
    "2:29"  : "Twenty Nine past Two",
    "06:30" : "Half past Six",
    "13:45" : "Quarter to Two",
}
describe('Test time', () => {
    Object.keys(testExpectation).forEach((key) => {
        it(`should check ${key} - ${testExpectation[key]}`, async () => {
            expect(await processTime(key)).toEqual(testExpectation[key])
        });
    })
});
import processTime, { getCurrentTimeInString } from "../../src"

const testExpectation = {
    "00:00" : "Midnight",
    "00:05" : "Five past twelve",
    "0:50"   : "Ten to one",
    "0:15"  : "Quarter past twelve",
    "0:29"  : "Twenty nine past twelve",
    "00:30" : "Half past twelve",
    "00:45" : "Quarter to one",
    "23:45" : "Quarter to midnight",

    "23:00" : "Eleven o'clock",
    "20:05" : "Five past eight",
    "12:51" : "Nine to one",
    "1:15"  : "Quarter past one",
    "2:29"  : "Twenty nine past two",
    "06:30" : "Half past six",
    "06:31" : "Twenty nine to seven",
    "13:45" : "Quarter to two",
    
    // error
    "60:40" : "Hour must be in with in the range of 0 - 23",
    "00:60" : "Minute must be with in the range of 0 - 59",
    "00:"   : "Time should be format like h(h):mm",
    ":30"   : "Time should be format like h(h):mm",
    "12:1"  : "Time should be format like h(h):mm",
    
    // No time argument should take current time.
    ""      : "Twelve past twelve"
}
describe('Test time', () => {
    Object.keys(testExpectation).forEach((key) => {
        it(`should check ${key} - ${testExpectation[key]}`, async () => {
            global.Date = jest.fn(() => ({
                    getHours: jest.fn(() => 12),
                    getMinutes: jest.fn(() => 12)
                }))
            try{
                expect(await processTime(key)).toEqual(testExpectation[key])
            } catch(err) {
                expect(err.message).toEqual(testExpectation[key])
            }
        });
    })
    it('should check if wrong language type provided', async () => {
        try{
            await processTime("00:00", "eng")
        } catch(err) {
            expect(err.message).toEqual("Cannot find module '../langs/24hr/eng.js' from 'lib/src/utils/templateUtils.js'")
        }
    });

    it('should check getCurrentTimeInString', () => {
        global.Date = jest.fn(() => ({
                getHours: jest.fn(() => 12),
                getMinutes: jest.fn(() => 12)
            }))
        expect(getCurrentTimeInString()).toEqual("12:12");
    });
});
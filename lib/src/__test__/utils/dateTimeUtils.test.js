import {getMinuteInTwoDigit}  from "../../utils/dateTimeUtils";

describe('dateTimeUtils', () => {
    it('should check return two digit while enter one digit', () => {
        const dateStub = {
            getMinutes: jest.fn(() => 1) 
        }
        expect(getMinuteInTwoDigit(dateStub)).toEqual("01");
    });
    it('should check not add extra zero when two digit already there', () => {
        const dateStub = {
            getMinutes: jest.fn(() => 10) 
        }
        expect(getMinuteInTwoDigit(dateStub)).toEqual("10");
    });
}); 
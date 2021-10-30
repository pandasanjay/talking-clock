import allTypes from "../../type/index"

describe('type index.js', () => {
    it('should match all files are exported', () => {
        expect(Object.keys(allTypes).length).toEqual(1)
    });
});
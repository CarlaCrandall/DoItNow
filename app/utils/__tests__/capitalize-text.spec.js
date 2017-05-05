import capitalize from '../capitalize-text';

describe('Capitalize Text Util', () => {
    it('should return a string with the first character capitalized', () => {
        const result = capitalize('some string to test');
        expect(result).toEqual('Some string to test');
    });
});

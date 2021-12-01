import endsWith from '../src/endsWith'

import * as matchers from 'jest-extended';
expect.extend(matchers);

describe('endWith.js test', () => {
    it('what if no position is given and target is at the end of the string', () => {
        expect(endsWith('abc', 'c')).toBe(true);
    });

    it('what if no position is given and target isn\'t at the end of the string', () => {
        expect(endsWith('abc', 'b')).toBe(false);
    });

    it('what if position is undefined and target is at the end of the string', () => {
        expect(endsWith('abc', 'c', undefined)).toBe(true);
    });

    it('what if position is undefined and target isn’t at the end of the string', () => {
        expect(endsWith('abc', 'b', undefined)).toBe(false);
    });

    it('what if position is before the target\'s match in string ', () => {
        expect(endsWith('abcdef', 'de', 3)).toBe(false);
    });

    it('what if position is after the target\'s match in string', () => {
        expect(endsWith('abcdef', 'de', 6)).toBe(false);
    });

    it('what if position cuts target\'s match in string in half', () => {
        expect(endsWith('abcdef', 'de', 4)).toBe(false);
    });

    it('what if position is on top of match in string (target = string)', () => {
        expect(endsWith('abcdef', 'de', 5)).toBe(true);
    });
    
    it('what if target is not of type String despite it having a match in string', () => {
        expect(endsWith('123', 3)).toBe(false);
    });

    it('what if position is out of range ', () => {
        expect(endsWith('123', '3', 5)).toBe(false);
    });
});

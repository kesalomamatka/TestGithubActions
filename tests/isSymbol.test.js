import isSymbol from '../src/isSymbol'

import * as matchers from 'jest-extended';
expect.extend(matchers);

describe('isSymbol.js test', () => {
    it('value = Symbol()', () => {
        expect(isSymbol(Symbol())).toBe(true);
    });

    it('value = Symbol.iterator', () => {
        expect(isSymbol(Symbol.iterator)).toBe(true);
    });

    it('value = String()', () => {
        expect(isSymbol("string")).toBe(false);
    });

    it('value = Number()', () => {
        expect(isSymbol(123)).toBe(false);
    });

    it('value = null', () => {
        expect(isSymbol(null)).toBe(false);
    });

    it('value = undefined', () => {
        expect(isSymbol(undefined)).toBe(false);
    });

    it('value = Boolean', () => {
        expect(isSymbol(false)).toBe(false);
    });
});

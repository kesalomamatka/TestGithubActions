import isEmpty from '../src/isEmpty'

describe('isEmpty.js test', ()=>{
    it('Input values have a ‘size’ of 0', ()=>{
        expect(isEmpty({})).toBe(true)
    });

    it('Input values have a ‘length’ of 0', ()=>{
        expect(isEmpty([])).toBe(true)
    });

    it('Input value ise null.', ()=>{
        expect(isEmpty(null)).toBe(true)
    });

    it('Input value is undefined.', ()=>{
        expect(isEmpty(undefined)).toBe(true)
    });

    it('Input value is NaN.', ()=>{
        expect(isEmpty(NaN)).toBe(true)
    });
    
    it('input values is an array, which contains something', ()=>{
        expect(isEmpty([123, 142, 32])).toBe(false)
    });

    it('input values is an object, which contains something', ()=>{
        expect(isEmpty({'a': 1})).toBe(false)
    });

    it('Input values is a string', ()=>{
        expect(isEmpty('abc')).toBe(false)
    });

    it('Input values is an empty string', ()=>{
        expect(isEmpty('')).toBe(true)
    });

    it('Input values is a number', ()=>{
        expect(isEmpty(123)).toBe(true)
    });

    it('Input values are boolean', ()=>{
        expect(isEmpty(true)).toBe(true)
        expect(isEmpty(false)).toBe(true)
    });
})
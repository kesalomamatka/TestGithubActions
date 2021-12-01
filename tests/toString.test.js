import toString from '../src/toString'

describe('isEmpty.js test', ()=>{
    it('value = null', ()=>{
        expect(toString(null)).toBe('')
    });

    it('value = undefined', ()=>{
        expect(toString(undefined)).toBe('')
    });

    it('value = Array ', ()=>{
      expect(toString([1, 2, 3])).toBe('1,2,3')
    });

    it('value = empty Array', ()=>{
      expect(toString([])).toBe('')
    });

    it('value = -0', ()=>{
      expect(toString(-0)).toBe('-0')
    });

    it('value = Number (int)', ()=>{
      expect(toString(123)).toBe('123')
    });

    it('value = Number (decimal)', ()=>{
      expect(toString(1.23)).toBe('1.23')
    });

    it('value = String', ()=>{
      expect(toString('123')).toBe('123')
    });
    
    it('value = Symbol() ', ()=>{
      expect(toString(Symbol('abc'))).toBe('Symbol(abc)')
      expect(toString(Symbol())).toBe('Symbol()')
    });
})
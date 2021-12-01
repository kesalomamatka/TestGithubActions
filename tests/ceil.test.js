import ceil from '../src/ceil'

describe('ceil.js test', ()=>{
    it('Only the first parameter is given', ()=>{
        expect(ceil(4.006)).toBe(5)
    });

    it('Both first and second parameters are given', ()=>{
        expect(ceil(6040, -2)).toBe(6100);
    });

    it('Positive number with a negative precision of 1', ()=>{
        expect(ceil(6140, -1)).toBe(7000);
    });

    it('Negative number with a positive precision of 1', ()=>{
        expect(ceil(-4.004, 1)).toBe(-4);
    });

    it('Negative number with a negative precision of 1', ()=>{
        expect(ceil(-6140, -1)).toBe(-6000);
    });

    it('Positive number with a positive precision of 1', ()=>{
        expect(ceil(4.004, 1)).toBe(4.1);
    });

    it('Positive number with a negative precision of 2', ()=>{
        expect(ceil(6140, -2)).toBe(6200);
    });

    it('Negative number with a positive precision of 2', ()=>{
        expect(ceil(-4.013, 2)).toBe(-4.01);
    });

    it('Negative number with a negative precision of 2', ()=>{
        expect(ceil(-6140, -2)).toBe(-6100);
    });

    it('Positive number with a positive precision of 2', ()=>{
        expect(ceil(4.004, 2)).toBe(4.01);
    });
})
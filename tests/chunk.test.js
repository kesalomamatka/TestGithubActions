import chunk from '../src/chunk'
import * as matchers from 'jest-extended';
expect.extend(matchers);

describe('chunk.js test', ()=>{
    it('Array can be split evenly', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toIncludeSameMembers([['a','b'],['c','d']])
    });

    it('Array can\'t be split evenly', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 3)).toIncludeSameMembers([['a', 'b', 'c'], ['d']])
    });
        
    it('Size is greater than array length', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 5)).toIncludeSameMembers(['a', 'b', 'c', 'd'])
    });

    it('Size is of length 1', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 1)).toIncludeSameMembers([['a'], ['b'], ['c'], ['d']])
    });

    it('Size is the exact length of array', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 4)).toIncludeSameMembers([['a', 'b', 'c', 'd']])
    });

    it('Array is empty', ()=>{
        expect(chunk([], 3)).toIncludeSameMembers([])
    });

    it('Size type is float', ()=>{
        expect(chunk(['a', 'b', 'c', 'd'], 3.2)).toIncludeSameMembers([['a', 'b', 'c'], ['d']])
    });
})
import compact from '../src/compact'
describe('compact.js test', () => {
    it('what if array only has all the falsy values', () => {
        expect(compact([ false,  '',  undefined, null, 0, -0, 0n, NaN])).toEqual([]);
    });

    it('what if array only has several truthy values of different acceptable types', () => {
        expect(compact([1, "two", [3], {"4": 5}])).toEqual([1, "two", [3], {"4": 5}]);
    });

    it('what if array has a single falsy value (length 1) ', () => {
        expect(compact([false])).toEqual([]);
    });

    it('what if array has a single truthy value (length 1)', () => {
        expect(compact([1])).toEqual([1]);
    });

    it('what if array is empty', () => {
        expect(compact([])).toEqual([]);
    });

    it('what if array has both truthy and falsy values', () => {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });
});

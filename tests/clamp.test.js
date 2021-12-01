import clamp from '../src/clamp.js'
describe('clamp.js test', () => {
    it('what if the number is already within the bounds of lower and upper (1, -5, 5)', () => {
        expect(clamp(1, -5, 5)).toEqual(1);
    });

    it('what if the number is higher than the upper bound (10, -5, 5)', () => {
        expect(clamp(10, -5, 5)).toEqual(5);
    });

    it('what if the number is lower than the lower bound (-10, -5, 5)', () => {
        expect(clamp(-10, -5, 5)).toEqual(-5);
    });

    it('what if lower is the same value as upper (4, 5, 5)', () => {
        expect(clamp(4, 5, 5)).toEqual(5);
    });

    it('what if lower/upper are -Infinity/Infinity (5, -Infinity, Infinity)', () => {
        expect(clamp(5, -Infinity, Infinity)).toEqual(5);
    });

    it('what if lower is -Infinity and number is lower than upper (2, -Infinity, 5)', () => {
        expect(clamp(2, -Infinity, 5)).toEqual(2);
    });

    it('what if lower is -Infinity and number is higher than upper (10, -Infinity, 5)', () => {
        expect(clamp(10, -Infinity, 5)).toEqual(5);
    });

    it('what if upper is Infinity and number is lower than lower (-15, -5, Infinity)', () => {
        expect(clamp(-15, -5, Infinity)).toEqual(-5);
    });
    
    it('what if upper is Infinity and number is higher than lower (2, -5, Infinity)', () => {
        expect(clamp(2, -5, Infinity)).toEqual(2);
    });

    it('what if decimals are used (0.5, -5.5, 5.5)', () => {
        expect(clamp(10.5, -5.5, 5.5)).toEqual(5.5);
    });
});

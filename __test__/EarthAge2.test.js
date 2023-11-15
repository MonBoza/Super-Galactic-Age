import { EarthAge2 } from '../src/js/EarthAge2.js'


describe('EarthAge2', () => {
    let newAge;

    beforeEach(() => {
        newAge = new EarthAge2(37, 25, 50);
    });
    test('should create object with three ages currentAge', () => {
        expect(newAge.currentAge).toBe(37);
        expect(newAge.pastAge).toBe(25);
        expect(newAge.futureAge).toBe(50);
    });
    test('should calculate mercuryAge with currentAge', () => {
        expect(newAge.mercuryAge()).toBe(154.17);
    });
    test('should calculate venusAge with currentAge', () => {
        expect(newAge.venusAge()).toBe(59.68);
    });
    test('should calculate marsAge with currentAge', () => {
        expect(newAge.marsAge()).toBe(19.68);
    });
    test('should calculate jupiterAge with currentAge', () => {
        expect(newAge.jupiterAge()).toBe(3.12);
    });
    test(' should calculate years since a past birthday', () => {
        expect(newAge.sincePastAge()).toEqual({earth: 12, mercury: 50.00, venus: 19.35, mars: 6.38, jupiter: 1.01});
    });
    test('should calculate years until future birthday', () => {
        expect(newAge.untilFutureAge()).toEqual({earth: 13,  mercury: 54.17, venus: 20.97, mars: 6.91, jupiter: 1.10});
    });
});

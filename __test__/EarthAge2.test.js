import { EarthAge2 } from '../src/js/EarthAge2.js'


describe('EarthAge2', () => {
    let newAge;
    
    beforeEach(() => {
        newAge = new EarthAge2(37, 25,50);
    });
    test('should create object with three ages currentAge', () => {
        expect(newAge.currentAge).toBe(37);
        expect(newAge.pastAge).toBe(25);
        expect(newAge.futureAge).toBe(50);
    });
    test('should calculate mercuryAge with currentAge', () =>{
        expect(newAge.mercuryAge()).toBe(154);
    });
    test('should calculate mercuryAge with currentAge', () =>{
        expect(newAge.venusAge()).toBe(59);
    });
    test('should calculate marsAge with currentAge', () =>{
        expect(newAge.marsAge()).toBe(19);
    });
    test('should calculate jupiterAge with currentAge', () =>{
        expect(newAge.jupiterAge()).toBe(3);
    });
    test(' should calculate years since a past birthday', () =>{
        expect(newAge.sincePastAge()).toEqual({earth: 12,
        mercury: 50, venus: 19, mars: 6, jupiter: 1});
    });
    test('should calculate years until future birthday', () => {
        expect(newAge.untilFutureAge()).toEqual({earth: 13,
            mercury: 54, venus: 20, mars: 6, jupiter: 1});
    });
});
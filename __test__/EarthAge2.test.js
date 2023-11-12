import { EarthAge2 } from '../src/js/EarthAge2.js'


describe('EarthAge2', () => {
    let newAge;
    
    beforeEach(() => {
        newAge = new EarthAge2(37,25,50);
    });
    test('should create object with three ages currentAge, futureAge, and pastAge', () => {
        expect(newAge.currentAge).toBe(37);
        expect(newAge.pastAge).toBe(25);
        expect(newAge.futureAge).toBe(50);
    });
    test('should create a method that calculates age with planet', () => {
        expect(newAge.calculateAge(0.24, 37)).toBe(154);
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
});
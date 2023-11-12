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
    test('should calculate currentAge on different planet years', () => {
        expect(newAge.calculatePlanets()).toBe("Mercury: 8.88 Venus: 22.94 Mars: 1968 Jupiter: 3.12");
    });
});
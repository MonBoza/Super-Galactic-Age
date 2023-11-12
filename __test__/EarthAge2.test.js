import { EarthAge2 } from '../src/js/EarthAge2.js'


describe('EarthAge2', () => {
    let newAge;
    
    beforeEach(() => {
        newAge = new EarthAge2(37,25,50);
    });
    test('should create object with three ages currentAge, futureAge, and pastAge', () => {
        expect(newAge.earthYears).toBe(37);
        expect(newAge.pastAge).toBe(25);
        expect(newAge.futureAge).toBe(50);
    });
});
import { EarthAge } from '../src/js/EarthAge.js'

describe('EarthAge', () => {
    let newAge;
    
    beforeEach(() => {
        newAge = new EarthAge(37,25,50);
    });
    test('should create a variable for earthYears', () =>{
            expect(newAge.earthYears).toBe(37);
            expect(newAge.pastAge).toBe(25);
            expect(newAge.futureAge).toBe(50);
    });
    test('should return newAge in Mercury years', () =>{
        expect(newAge.ageOnMercury()).toBe(9);
    });
        test('should return newAge in Venus years', () =>{
            expect(newAge.ageOnVenus()).toBe(23);
    });
    test('should return newAge in Mars years', () =>{
        expect(newAge.ageOnMars()).toBe(20);
    });
    test('should return newAge in Jupiter years', () =>{
        expect(newAge.ageOnJupiter()).toBe(3);
    });
   test('should subtract past age from earthYears and return EarthYears Passed', () =>{
     expect(newAge.earthYearsPassed()).toBe("12 Earth years have passed");
    });
    test('should subtract past age from earthYears and return mercury Years passed', () =>{
        expect(newAge.mercuryYearsPassed()).toBe("3 Mercury years have passed");
    });
    test('should subtract past age from earthYears and return Venus Years passed', () =>{
        expect(newAge.venusYearsPassed()).toBe("7 Venus years have passed");
    });
    test('should subtract past age from earthYears and return mars Years passed', () =>{
        expect(newAge.marsYearsPassed()).toBe("6 Mars years have passed");
    });
});

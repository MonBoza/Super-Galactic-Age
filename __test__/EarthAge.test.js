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
        expect(newAge.ageOnMercury()).toBe(8.88);
    });
        test('should return newAge in Venus years', () =>{
            expect(newAge.ageOnVenus()).toBe(22.94);
    });
    test('should return newAge in Mars years', () =>{
        expect(newAge.ageOnMars()).toBe(19.68);
    });
    test('should return newAge in Jupiter years', () =>{
        expect(newAge.ageOnJupiter()).toBe(3.12);
    });
   test('should subtract past age from earthYears and return EarthYears Passed', () =>{
     expect(newAge.earthYearsPassed()).toBe("12 Earth years have passed");
    });
    test('should subtract past age from earthYears and return mercury Years passed', () =>{
        expect(newAge.mercuryYearsPassed()).toBe("2.88 Mercury years have passed");
    });
    test('should subtract past age from earthYears and return Venus Years passed', () =>{
        expect(newAge.venusYearsPassed()).toBe("7.44 Venus years have passed");
    });
    test('should subtract past age from earthYears and return mars Years passed', () =>{
        expect(newAge.marsYearsPassed()).toBe("6.38 Mars years have passed");
    });
    test('should subtract past age from earthYears and return jupiter Years passed', () =>{
        expect(newAge.jupiterYearsPassed()).toBe("1.01 Jupiter year(s) have passed");
    });
    test('should subtract future age from earthYears and return earthYears have yet to pass', () =>{
        expect(newAge.futureEarthYears()).toBe("13 Earth years have yet to pass");
    });
    test('should subtract future age from earthYears and return Mercury Years have yet to pass', () =>{
        expect(newAge.futureMercuryYears()).toBe("2.88 Mercury years have yet to pass");
    });
    test('should subtract future age from earthYears and return Venus Years have yet to pass', () =>{
        expect(newAge.futureVenusYears()).toBe("7.68 Venus years have yet to pass");
    });
    test('should subtract future age from earthYears and return Mars Years have yet to pass', () =>{
        expect(newAge.futureMarsYears()).toBe("6.38 Mars years have yet to pass");
    });
    test('should subtract future age from earthYears and return jupiter Years have yet to pass', () =>{
        expect(newAge.futureJupiterYears()).toBe("1.01 Jupiter year(s) have yet to pass");
    });
});

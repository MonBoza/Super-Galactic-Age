import { EarthAge } from '../src/js/EarthAge.js'

describe('EarthAge', () => {
    
   
    test('should create a variable for earthYears', () =>{
    let newAge = new EarthAge(37,25,50);
            expect(newAge.earthYears).toBe(37);
            expect(newAge.pastAge).toBe(25);
            expect(newAge.futureAge).toBe(50);
    });
    test('method should return newAge in Mercury years', () =>{
        let newAge = new EarthAge(37,25,50);
        expect(newAge.ageOnMercury()).toBe(9);
    });
        test(' method should return newAge in Venus years', () =>{
            let newAge = new EarthAge(37,25,50);
            expect(newAge.ageOnVenus()).toBe(23);
    });
    test('method should return newAge in Mars years', () =>{
        let newAge = new EarthAge(37,25,50);
        expect(newAge.ageOnMars()).toBe(20);
    });
    test('method should return newAge in Jupiter years', () =>{
        let newAge = new EarthAge(37,25,50);
        expect(newAge.ageOnJupiter()).toBe(3);
    });
});
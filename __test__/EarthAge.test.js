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
    test('method should return newAge in Mercury years', () =>{
        expect(newAge.ageOnMercury()).toBe(9);
    });
        test(' method should return newAge in Venus years', () =>{
            expect(newAge.ageOnVenus()).toBe(23);
    });
    test('method should return newAge in Mars years', () =>{
        expect(newAge.ageOnMars()).toBe(20);
    });
    test('method should return newAge in Jupiter years', () =>{
        expect(newAge.ageOnJupiter()).toBe(3);
    });
   
    // test('should determine how many years have passed since your past birthday in mars Years', () =>{
    //     let marsDiff = newAge.yearsPassed();
    //     expect(marsDiff).toEqual(6);
    // });
    // test('should determine how many years have passed since your past birthday in mercury Years', () =>{
    //     let mercuryDiff = newAge.yearsPassed();
    //     expect(mercuryDiff).toEqual(3);
    // // });
});

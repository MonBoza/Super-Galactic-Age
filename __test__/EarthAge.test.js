import { EarthAge } from '../src/js/EarthAge.js'

describe('EarthAge', () => {
    
   
    test('should create a variable for earthYears', () =>{
        let newAge = new EarthAge(37);
        expect(newAge.earthYears).toBe(37);
});
    test(' method should return newAge in Venus years', () =>{
        let newAge = new EarthAge(37);
        expect(newAge.ageOnVenus()).toBe(23);
});
    test('method should return newAge in Mars years', () =>{
        let newAge = new EarthAge(37);
        expect(newAge.ageOnMars()).toBe(20);
    })
});
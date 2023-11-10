import { EarthAge } from '../src/js/EarthAge.js'

describe('EarthAge', () => {
    let newAge = new EarthAge(37);
   
    test('should create a variable for earthYears', () =>{
    expect(newAge.earthYears).toBe(37);
});
    test(' method should return newAge in Venus years ')
    expect(newAge.ageOnVenus()).toEqual(60);
});
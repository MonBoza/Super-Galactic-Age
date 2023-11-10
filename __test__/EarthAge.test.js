import { EarthAge } from '../src/js/EarthAge.js'

describe('EarthAge', () => {
    test('should create a variable for earthYears', () =>{
    let newAge = new EarthAge(37);
    expect(newAge.earthYears).toBe(37);
});
});
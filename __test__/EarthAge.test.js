import {EarthAge} from './src/js/EarthAge.js'

describe('EarthAge', () => {
    test('should create a variable for earthYears that returns current Age')
    let newAge = new EarthAge(37);
    expect(earthYears).toEqual(37);
})
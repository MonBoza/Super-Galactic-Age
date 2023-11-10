import { YearsPassed } from '../src/js/yearsPassed.js'
import{ EarthAge } from '../src/js/EarthAge.js'

describe (YearsPassed, () => {
    let newAge;
    
    beforeEach(() => {
        newAge = new EarthAge(37,25,50);
    });
    test('should create a constructor for pastAge', () =>{
        expect(newAge.pastAge).toBe(25);
        expect(newAge.earthYears).toBe(37);
    });

});  
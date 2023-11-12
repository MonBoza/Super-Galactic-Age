export class EarthAge2 {
    constructor(currentAge, pastAge, futureAge) {
        this.currentAge = currentAge;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
    }
    calculateAge(planet, age) {
        return parseInt(age / planet); 
    }
    mercuryAge() {
        return this.calculateAge(0.24, this.currentAge);
    }
    venusAge() {
        return this.calculateAge(0.62, this.currentAge);
    }
    marsAge() {
        return this.calculateAge(1.88, this.currentAge);
    }
} 
export class EarthAge2 {
    constructor(currentAge) {
        this.currentAge = currentAge;
    }
    mercuryAge() {
        return parseInt(this.currentAge / 0.24);
    }
    venusAge() {
        return parseInt(this.currentAge / 0.62);
    }
    marsAge() {
        return parseInt(this.currentAge / 1.88);
    }
    jupiterAge() {
        return parseInt(this.currentAge / 11.86);
    }
    sincePastAge(pastAge) {
        const ageDiff = this.currentAge - pastAge;
        return {
            earth: ageDiff,
            mercury: parseInt(ageDiff / 0.24),
            venus: parseInt(ageDiff / 0.62),
            mars: parseInt(ageDiff / 1.88),
            jupiter: parseInt(ageDiff / 11.86)
        }  
    }
    untilFutureAge(futureAge) {
        // const futureAgeDiff = this.currentAge - futureAge;

    }

} 
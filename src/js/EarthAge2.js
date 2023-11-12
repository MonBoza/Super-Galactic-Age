export class EarthAge2 {
    constructor(currentAge, pastAge, futureAge) {
        this.currentAge = currentAge;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
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
    sincePastAge() {
        const ageDiff = this.currentAge - this.pastAge;
        return {
            earth: ageDiff,
            mercury: parseInt(ageDiff / 0.24),
            venus: parseInt(ageDiff / 0.62),
            mars: parseInt(ageDiff / 1.88),
            jupiter: parseInt(ageDiff / 11.86)
        }; 
    }
    untilFutureAge() {
        const futureAgeDiff = this.futureAge - this.currentAge;
            return{
            earth: futureAgeDiff,
            mercury: parseInt(futureAgeDiff / 0.24),
            venus: parseInt(futureAgeDiff / 0.62),
            mars: parseInt(futureAgeDiff / 1.88),
            jupiter: parseInt(futureAgeDiff / 11.86)
        };
    }

} 
export class EarthAge2 {
    constructor(currentAge, pastAge, futureAge) {
        this.currentAge = currentAge;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
    }
    mercuryAge() {
        return Number((this.currentAge / 0.24).toFixed(2));
    }
    venusAge() {
        return Number((this.currentAge / 0.62).toFixed(2));
    }
    marsAge() {
        return Number((this.currentAge / 1.88).toFixed(2));
    }
    jupiterAge() {
        return Number((this.currentAge / 11.86).toFixed(2));
    }
    sincePastAge() {
        const ageDiff = this.currentAge - this.pastAge;
        return {
            earth: ageDiff,
            mercury: Number((ageDiff / 0.24).toFixed(2)),
            venus: Number((ageDiff / 0.62).toFixed(2)),
            mars: Number((ageDiff / 1.88).toFixed(2)),
            jupiter: Number((ageDiff / 11.86).toFixed(2))
        }; 
    }
    untilFutureAge() {
        const futureAgeDiff = this.futureAge - this.currentAge;
        return{
            earth: futureAgeDiff,
            mercury: Number((futureAgeDiff / 0.24).toFixed(2)),
            venus: Number((futureAgeDiff / 0.62).toFixed(2)),
            mars: Number((futureAgeDiff / 1.88).toFixed(2)),
            jupiter: Number((futureAgeDiff / 11.86).toFixed(2))
        };
    }

} 
export class EarthAge {
    constructor(earthYears, pastAge, futureAge) {
        this.earthYears = earthYears;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
    }
    ageOnMercury() {
        return Math.round(this.earthYears * 0.24);
    }
    ageOnVenus() {
        return Math.round(this.earthYears * 0.62);
    }
    ageOnMars() {
        return Math.round(this.earthYears / 1.88);
    }
    ageOnJupiter() {
        return Math.round(this.earthYears / 11.86);
    }
    earthYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge;
        return ageDiff + " Earth years have passed";
    }
    mercuryYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge; 
        return Math.round(ageDiff * 0.24) + " Mercury years have passed";
    }
    venusYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge; 
        return Math.round(ageDiff * 0.62) + " Venus years have passed";
    }
    marsYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge; 
        return Math.round(ageDiff / 1.88) + " Mars years have passed";
    }
    jupiterYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge; 
        return Math.round(ageDiff / 11.86) + " Jupiter year(s) have passed";
    }
    futureEarthYears() {
        const futureAgeDiff =this.futureAge - this.earthYears;
        return futureAgeDiff + " Earth years have yet to pass"
    }


}

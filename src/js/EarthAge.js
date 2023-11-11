export class EarthAge {
    constructor(earthYears, pastAge, futureAge) {
        this.earthYears = earthYears;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
    }
    ageOnMercury() {
        return parseFloat((this.earthYears * 0.24).toFixed(2));
    }
    ageOnVenus() {
        return parseFloat((this.earthYears * 0.62).toFixed(2));
    }
    ageOnMars() {
        return parseFloat((this.earthYears / 1.88).toFixed(2));
    }
    ageOnJupiter() {
        return parseFloat((this.earthYears / 11.86).toFixed(2));
    }
    earthYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge;
        return ageDiff + " Earth years have passed";
    }
    mercuryYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge; 
        return (ageDiff * 0.24).toFixed(2) + " Mercury years have passed";
    }
    venusYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge; 
        return (ageDiff * 0.62).toFixed(2) + " Venus years have passed";
    }
    marsYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge; 
        return (ageDiff / 1.88).toFixed(2) + " Mars years have passed";
    }
    jupiterYearsPassed() {
        const ageDiff = this.earthYears - this.pastAge; 
        return (ageDiff / 11.86).toFixed(2) + " Jupiter year(s) have passed";
    }
    futureEarthYears() {
        const futureAgeDiff = this.futureAge - this.earthYears;
        return futureAgeDiff + " Earth years have yet to pass";
    }
    futureMercuryYears() {
        const futureAgeDiff = this.earthYears - this.pastAge; 
        return (futureAgeDiff * 0.24).toFixed(2) + " Mercury years have yet to pass";
    }
    futureVenusYears() {
        const futureAgeDiff = this.earthYears - this.pastAge; 
        return (futureAgeDiff * 0.64).toFixed(2) + " Venus years have yet to pass";
    }
    futureMarsYears() {
        const futureAgeDiff = this.earthYears - this.pastAge;
        return (futureAgeDiff / 1.88).toFixed(2) + " Mars years have yet to pass";
    }
    futureJupiterYears() {
        const futureAgeDiff = this.earthYears - this.pastAge;
        return (futureAgeDiff / 11.86).toFixed(2) + " Jupiter year(s) have yet to pass";
    }
}

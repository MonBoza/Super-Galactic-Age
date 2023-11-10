export class EarthAge {
    constructor(earthYears) {
        this.earthYears = earthYears;
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
    yearsPassed(desiredAge) {
        return desiredAge;
    }
}
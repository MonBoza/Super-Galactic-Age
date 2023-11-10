export class EarthAge {
    constructor(earthYears) {
        this.earthYears = earthYears;
    }
    ageOnVenus() {
        return Math.round(this.earthYears * 0.62);
    }
    ageOnMars() {
        return Math.round(this.earthYears / 1.88);
    }
}
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
//     // yearsPassed () {
//     //     let ageDiff = this.earthYears - this.pastAge;
//     //     return {
//     //         // earth: ageDiff,
//     //         mercury:
//     //         // venus:
//     //         mars: this.calculatePlanets(ageDiff, * .24)
//     //         // jupiter:
//     //     }
//     calculatePlanets(ageDiff, planetNum) {
//         // const result = ageDiff * planetNum
//         // return Math.round(result)
//     }
//     }
// // }
}
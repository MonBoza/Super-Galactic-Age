import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { EarthAge2 } from './EarthAge2.js';

function handleAgeForm(event) {
    event.preventDefault();
    const currentAge = document.querySelector("input[name='currentAge']").value;
    const pastAge = document.querySelector("input[name='pastAge']").value;
    const futureAge = document.querySelector("input[name='futureAge']").value;
    let newAge = new EarthAge2(currentAge, pastAge, futureAge);
    let current = "Mercury: " + newAge.mercuryAge() + ", " + "Venus: " + newAge.venusAge() + ", " + "Mars: " + newAge.marsAge() + ", " + "Jupiter: " + newAge.jupiterAge();
    const results = document.getElementById("current-results");
    results.textContent = "Your Current Age on these Planets: " + current;
    const p1 = document.createElement("p");
    const past = newAge.sincePastAge();
    p1.textContent = `Years Since your choice of past birthday: Earth: ${past.earth}, Mercury: ${past.mercury}, Venus: ${past.venus}, Mars: ${past.mars}, Jupiter: ${past.jupiter}`;
    results.append(p1);
    const p2 = document.createElement("p");
    const future = newAge.untilFutureAge();
    p2.textContent = `Years until you future age:, Earth: ${future.earth}, Mercury: ${future.mercury}, Venus: ${future.venus}, Mars: ${future.mars}, Jupiter: ${future.jupiter}`;
    results.append(p2);
}

window.addEventListener("DOMContentLoaded", function () {
    this.document.querySelector("form#age-form").addEventListener("submit", handleAgeForm);
});

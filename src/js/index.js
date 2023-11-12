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
    const results = document.getElementById("results");
    results.textContent = "Your Current Age on these Planets: " + current;
}

window.addEventListener("DOMContentLoaded", function () {
    this.document.querySelector("form#age-form").addEventListener("submit", handleAgeForm);
});

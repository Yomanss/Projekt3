"use strict";

let convertFrom = document.querySelector("[data-conversion-from]");
let numberInput = document.querySelector("[data-number-input]");
let conversionResult = document.querySelector("[data-number-output]");

function test() {
    let numberFrom = parseInt(numberInput.value);
    numberFrom /= 100;
    conversionResult.value = numberFrom;
}

convertFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    test();
})

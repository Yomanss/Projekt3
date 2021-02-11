"use strict";

let convertFrom = document.querySelector("[data-conversion-from]");
let numberInput = document.querySelector("[data-number-input]");
let inputMetric = document.querySelector("[data-input-select]");
let outputMetric = document.querySelector("[data-output-select]");
let conversionResult = document.querySelector("[data-number-output]");

function test() {
    let numberFrom = parseInt(numberInput.value);
    console.log(inputMetric.value);
    console.log(outputMetric.value);

    switch (inputMetric.value) {
        case "centimeter":
            switch (outputMetric.value) {
                case "meter":
                    console.log("HEJ");
                    numberFrom /= 100;
                    break;
            }
            break;
    }
    conversionResult = numberFrom;
}

convertFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    test();
})

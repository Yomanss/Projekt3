"use strict";

let convertFrom = document.querySelector("[data-conversion-from]");
let convertTo = document.querySelector("[data-conversion-to]");
let numberInput = document.querySelector("[data-number-input]");
let inputMetric = document.querySelector("[data-input-select]");
let outputMetric = document.querySelector("[data-output-select]");
let conversionResult = document.querySelector("[data-number-output]");

function converter() {
    let inputValue = parseInt(numberInput.value);

    switch (inputMetric.value) {
        case "centimeter":
            switch (outputMetric.value) {
                case "centimeter":
                    inputValue;
                    break;
                case "meter":
                    inputValue /= 100;
                    break;
                case "feet":
                    inputValue /= 30.48;
                    break;
            }
            break;
    }
    conversionResult.value = inputValue.toFixed(2);
}

convertFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    converter();
})

convertTo.addEventListener("submit", (e) => {
    e.preventDefault();
    test();
})

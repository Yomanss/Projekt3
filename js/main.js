"use strict";

let convertFrom = document.querySelector("[data-conversion-from]");
let convertTo = document.querySelector("[data-conversion-to]");
let numberInput = document.querySelector("[data-number-input]");
let inputMetric = document.querySelector("[data-input-select]");
let outputMetric = document.querySelector("[data-output-select]");
let conversionResult = document.querySelector("[data-number-output]");
let convertButton = document.querySelector("[data-conversion-button]");

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
        case "meter":
            switch (outputMetric.value) { 
                case "centimeter":
                    inputValue *= 100;
                    break;
                case "meter":
                    inputValue;
                    break;
                case "feet":
                    inputValue *= 3.2808;
                    break;
            }
            break;
        case "feet":
            switch(outputMetric.value) {
                case "centimeter":
                    inputValue *= 30.48;
                    break;
                case "meter":
                    inputValue /= 3.2808;
                    break;
                case "feet":
                    inputValue;
                    break;
            }
            break;
    }
    conversionResult.value = inputValue.toFixed(2);
}

numberInput.addEventListener("keyup",converter);
inputMetric.addEventListener("change",converter);
outputMetric.addEventListener("change",converter);
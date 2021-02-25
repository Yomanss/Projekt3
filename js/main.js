"use strict";

let unitType = document.querySelector("[data-unit-type]");
let conversionType = document.getElementsByName("typeRadio");
let typeLength = document.querySelectorAll(".length");
let typeTime = document.querySelectorAll(".time");
let radioValue;

let numberInput = document.querySelector("[data-number-input]");
let numberOutput = document.querySelector("[data-number-output]");
let inputMetric = document.querySelector("[data-input-select]");
let outputMetric = document.querySelector("[data-output-select]");

unitType.addEventListener("change", converterType);
numberInput.addEventListener("keyup", converter);
inputMetric.addEventListener("change", converter);
outputMetric.addEventListener("change", converter);

function converterType() {
    
    for (let i = 0; i < conversionType.length; i++) {
        if (conversionType[i].checked) {
          radioValue = conversionType[i].value;  
        }
    }

    for (let i = 0; i < typeLength.length; i++) {
        typeLength[i].classList.remove("invisible");
    }

    for (let i = 0; i < typeTime.length; i++) {
        typeTime[i].classList.remove("invisible");
    }

    for (let i = 0; i < typeLength.length; i++) {
        typeLength[i].classList.add("invisible");
    }

    for (let i = 0; i < typeTime.length; i++) {
        typeTime[i].classList.add("invisible");
    }
    
    if (radioValue === "1") {
        for (let i = 0; i < typeLength.length; i++) {
            typeLength[i].classList.remove("invisible");
        }
        typeTime[0].removeAttribute("selected");
        typeTime[2].removeAttribute("selected");
        typeLength[0].setAttribute("selected", true);
        typeLength[3].setAttribute("selected", true);
    }

    if (radioValue === "2") {
        for (let i = 0; i < typeTime.length; i++) {
            typeTime[i].classList.remove("invisible");
        }
        typeLength[0].removeAttribute("selected");
        typeLength[3].removeAttribute("selected");
        typeTime[0].setAttribute("selected", true);
        typeTime[2].setAttribute("selected", true);
    }
}

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
        case "second": 
            switch(outputMetric.value) {
                case "second":
                    inputValue *= 10;
                    break;
            }
            break;
    }
    numberOutput.value = inputValue.toFixed(2);
}

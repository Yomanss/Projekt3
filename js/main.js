"use strict";

let unitType = document.querySelector("[data-unit-type]");
let conversionType = document.getElementsByName("typeRadio");
let typeLength = document.querySelectorAll(".length");
let typeTemp = document.querySelectorAll(".temp");
let typeSpeed = document.querySelectorAll(".speed");
let radioValue;

let numberInput = document.querySelector("[data-number-input]");
let numberOutput = document.querySelector("[data-number-output]");
let inputMetric = document.querySelector("[data-input-select]");
let outputMetric = document.querySelector("[data-output-select]");

unitType.addEventListener("change", converterType);
unitType.addEventListener("change", converter);
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

  for (let i = 0; i < typeTemp.length; i++) {
    typeTemp[i].classList.remove("invisible");
  }

  for (let i = 0; i < typeSpeed.length; i++) {
    typeSpeed[i].classList.remove("invisible");
  }

  for (let i = 0; i < typeLength.length; i++) {
    typeLength[i].classList.add("invisible");
  }

  for (let i = 0; i < typeTemp.length; i++) {
    typeTemp[i].classList.add("invisible");
  }

  for (let i = 0; i < typeSpeed.length; i++) {
    typeSpeed[i].classList.add("invisible");
  }

  if (radioValue === "1") {
    for (let i = 0; i < typeLength.length; i++) {
      typeLength[i].classList.remove("invisible");
    }
    inputMetric.value = typeLength[0].value;
    outputMetric.value = typeLength[0].value;
  }

  if (radioValue === "2") {
    for (let i = 0; i < typeTemp.length; i++) {
      typeTemp[i].classList.remove("invisible");
    }
    inputMetric.value = typeTemp[0].value;
    outputMetric.value = typeTemp[0].value;
  }

  if (radioValue === "3") {
    for (let i = 0; i < typeSpeed.length; i++) {
      typeSpeed[i].classList.remove("invisible");
    }
    inputMetric.value = typeSpeed[0].value;
    outputMetric.value = typeSpeed[0].value;
  }
}

function converter() {
  let inputValue = parseFloat(numberInput.value);

  switch (inputMetric.value) {
    case "Centimeter": {
      switch (outputMetric.value) {
        case "Centimeter":
          inputValue;
          break;
        case "Meter":
          inputValue /= 100;
          break;
        case "Feet":
          inputValue /= 30.48;
          break;
      }
      break;
    }
    case "Meter": {
      switch (outputMetric.value) {
        case "Centimeter":
          inputValue *= 100;
          break;
        case "Meter":
          inputValue;
          break;
        case "Feet":
          inputValue *= 3.2808;
          break;
      }
      break;
    }
    case "Feet": {
      switch (outputMetric.value) {
        case "Centimeter":
          inputValue *= 30.48;
          break;
        case "Meter":
          inputValue /= 3.2808;
          break;
        case "Feet":
          inputValue;
          break;
      }
      break;
    }
    case "Celsius": {
      switch (outputMetric.value) {
        case "Celsius":
          inputValue;
          break;
        case "Kelvin":
          inputValue += 273.15;
          break;
        case "Fahrenheit":
          inputValue *= 1.8;
          inputValue += 32;
          break;
      }
      break;
    }
    case "Kelvin": {
      switch (outputMetric.value) {
        case "Celsius":
          inputValue -= 273.15;
          break;
        case "Kelvin":
          inputValue;
          break;
        case "Fahrenheit":
          inputValue -= 273.15;
          inputValue *= 1.8;
          inputValue += 32;
          break;
      }
      break;
    }
    case "Fahrenheit": {
      switch (outputMetric.value) {
        case "Celsius":
          inputValue -= 32;
          inputValue /= 1.8;
          break;
        case "Kelvin":
          inputValue -= 32;
          inputValue /= 1.8;
          inputValue += 273.15;
          break;
        case "Fahrenheit":
          inputValue;
          break;
      }
      break;
    }
    case "m/s": {
      switch (outputMetric.value) {
        case "m/s":
          inputValue;
          break;
        case "km/h":
          inputValue *= 18;
          inputValue /= 5;
          break;
        case "miles/h":
          inputValue *= 18;
          inputValue /= 5;
          inputValue /= 1.6093;
          break;
      }
      break;
    }
    case "km/h": {
      switch (outputMetric.value) {
        case "m/s":
          inputValue *= 5;
          inputValue /= 18;
          break;
        case "km/h":
          inputValue;
          break;
        case "miles/h":
          inputValue /= 1.6093;
          break;
      }
      break;
    }
    case "miles/h": {
      switch (outputMetric.value) {
        case "m/s":
          inputValue *= 1.6093;
          inputValue *= 5;
          inputValue /= 18;
          break;
        case "km/h":
          inputValue *= 1.6093;
          break;
        case "miles/h":
          inputValue;
          break;
      }
      break;
    }
  }
  numberOutput.value = inputValue.toFixed(2);
}

"use strict";

let convertFrom = document.querySelector("[data-conversion-from]");
let numberInput = document.querySelector("[data-number-input]");
let conversionResult = document.querySelector(".result");

function test() {
    Event.preventDefault();
    console.log(numberInput);
}

convertFrom.addEventListener("submit", test())

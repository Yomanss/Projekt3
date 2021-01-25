"use strict";

function Meny() {
    let subMenu = documnet.getElementById("subMeny");
    if (subMenu.className == "invisible") {
        subMenu.className = "menyOn";
    } 
    else {
        subMenu.className = "invisible";
    }
}
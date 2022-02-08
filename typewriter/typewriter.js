"use strict";

window.addEventListener("load", setUp);

const myString = document.querySelector(".typewritten").innerHTML;
console.log(myString);
let maxLength;

function setUp() {
  console.log("setUp");
  iterator = 0;
  maxLength = myString.length;
  initTextLoop();
}

function initTextLoop() {
  textLoop();
}

function textLoop() {
  iterator++;
  console.log("I'm looping");
  if (iterator < maxLength) {
    textLoop();
  }
}

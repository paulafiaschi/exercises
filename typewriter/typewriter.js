"use strict";

window.addEventListener("load", setUp);

let myString = document.querySelector(".typewritten").innerHTML;
console.log(myString);

let maxLength;
let iterator;

function setUp() {
  console.log("setUp");
  iterator = 0;
  maxLength = myString.length + 1;
  initTextLoop();
}

function initTextLoop() {
  textLoop();
}

function textLoop() {
  let newString = myString.substr(0, iterator);
  // console.log(newString);
  myString.charAt(iterator);
  document.querySelector(".typewritten").innerHTML = newString;
  // console.log(myString.charAt(iterator));
  iterator++;
  // console.log("I'm looping");
  if (iterator < maxLength) {
    setTimeout(textLoop, 200);
  }
}

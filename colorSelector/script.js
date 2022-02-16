"use strict";

window.addEventListener("load", init);

function init() {
  getColor();
  document.querySelector("#colorSquare").addEventListener("input", showBoxColored);
}

function getColor() {
  let colorPicked = document.querySelector("#favColor").value;
  console.log("get color: " + colorPicked);
  return showBoxColored(colorPicked);
}

function showBoxColored(colorPicked) {
  document.querySelector("#colorSquare").style.backgroundColor = colorPicked;
  console.log("show box with color: " + colorPicked);
  return showHex(colorPicked);
}

function showHex(colorPicked) {
  document.querySelector("#hexCode").innerHTML = "HEX: " + colorPicked;
  return convertToRgb(colorPicked);
}

function convertToRgb(colorpicked) {
  let hexString = colorpicked.toString();
  console.log("hex to string: " + hexString);

  let rAsHex = hexString.substring(1, 3);
  let gAsHex = hexString.substring(3, 5);
  let bAsHex = hexString.substring(5, 7);

  let rAsInteger = parseInt(rAsHex, 16);
  console.log("r to string: " + rAsInteger);

  let gAsInteger = parseInt(gAsHex, 16);
  console.log("g to string: " + gAsInteger);

  let bAsInteger = parseInt(bAsHex, 16);
  console.log("b to string: " + bAsInteger);

  document.querySelector("#rgbCode").innerHTML = "RGB: (" + rAsInteger + ", " + gAsInteger + ", " + bAsInteger + ")";
}

// //Convert from hex to integer
// let numberAsHex = "ff";
// let numberAsInteger = parseInt(numberAsHex, 16); //Second argumnet is the base

// console.log("numberAsInteger", numberAsInteger);

// //Convert from integer to hex
// let someNumberAsInteger = 255;
// let someBAse16NumberAsString = someNumberAsInteger.toString(16);

// console.log("someBAse16NumberAsString", someBAse16NumberAsString);

// //Simple integer convertion
// let simpleNumberAsString = "234";
// let simpleNumber = parseInt(numberAsString);

// console.log(simpleNumber);

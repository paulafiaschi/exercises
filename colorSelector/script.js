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
  document.querySelector("#hexCode").innerHTML = "HEX: " + colorPicked.toUpperCase();
  return convertToRgb(colorPicked);
}

function convertToRgb(colorpicked) {
  let hexString = colorpicked.toString();

  let rAsHex = hexString.substring(1, 3);
  let gAsHex = hexString.substring(3, 5);
  let bAsHex = hexString.substring(5, 7);

  let rAsInteger = parseInt(rAsHex, 16);

  let gAsInteger = parseInt(gAsHex, 16);

  let bAsInteger = parseInt(bAsHex, 16);

  // console.log("to RGB: (" + rAsInteger + ", " + gAsInteger + ", " + bAsInteger + ")");
  document.querySelector("#rgbCode").innerHTML = "RGB: (" + rAsInteger + ", " + gAsInteger + ", " + bAsInteger + ")";

  let rgbObj = { rAsInteger, gAsInteger, bAsInteger };
  console.log(rgbObj);

  // let cssColor = "background-color: rgb(" + rAsInteger + ", " + gAsInteger + ", " + bAsInteger + ")";
  // console.log(cssColor);
  return convertToHex(rgbObj);
}

function convertToHex(rgbObj) {
  let rHex = rgbObj.rAsInteger.toString(16);
  let gHex = rgbObj.gAsInteger.toString(16);
  let bHex = rgbObj.bAsInteger.toString(16);

  if (rHex.length == 1) {
    rHex = "0" + rHex;
  }
  if (gHex.length == 1) {
    gHex = "0" + gHex;
  }
  if (bHex.length == 1) {
    bHex = "0" + bHex;
  }

  let hexValue = "#" + rHex + gHex + bHex;
  console.log("to hex: " + hexValue);
  return hexValue;
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

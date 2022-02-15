"use strict";
getColor();

function getColor() {
  let colorPicked = document.querySelector("#favColor").value;
  console.log(colorPicked);
  return showBoxColored(colorPicked);
}

function showBoxColored(colorPicked) {
  document.querySelector("#colorSquare").style.backgroundColor = colorPicked;
}

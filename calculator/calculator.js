"use strict";

window.addEventListener("DOMContentLoaded", setUp);

function setUp() {
  document.querySelector("#calculate").addEventListener("click", calcClick);
  document.querySelector("#clear").addEventListener("click", clearClick);
}

function calcClick() {
  console.log("calculate");
  console.log(document.querySelector("#operator").value);

  const operatorValue = document.querySelector("#operator").value;
  const firstNumber = Number(document.querySelector("#firstnumber").value);
  const secondNumber = Number(document.querySelector("#secondnumber").value);
  let result;

  if (operatorValue === "add") {
    result = firstNumber + secondNumber;
  } else if (operatorValue === "mul") {
    result = firstNumber * secondNumber;
  } else if (operatorValue === "sub") {
    result = firstNumber - secondNumber;
  } else if (operatorValue === "div") {
    result = firstNumber / secondNumber;
  }

  let decimals;
  if (document.querySelector("#doround").checked) {
    decimals = document.querySelector("#decimals").value;
  }

  console.log("result=" + result.toFixed(decimals));
}

function clearClick() {
  console.log("clear");
}

// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// sayHello("Robert");

// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
// }

// presentPet("Robert", "dog", "Simba");
let str = "ignacio";

function capitalize(str) {
  let firstLetter = str.charAt(0).toUpperCase();
  let restOfName = str.substring(1).toLowerCase();
  console.log(`${firstLetter}${restOfName}`);
}

let unNombre = "pETer";
capitalize(unNombre);

// COLOURS HEX AND RGB EXERCISE

//Convert from hex to integer
let numberAsHex = "ff";
let numberAsInteger = parseInt(numberAsHex, 16); //Second argumnet is the base

console.log("numberAsInteger", numberAsInteger);

//Convert from integer to hex
let someNumberAsInteger = 255;
let someBAse16NumberAsString = someNumberAsInteger.toString(16);

console.log("someBAse16NumberAsString", someBAse16NumberAsString);

//Simple integer convertion
let simpleNumberAsString = "234";
let simpleNumber = parseInt(numberAsString);

// console.log(simpleNumber);

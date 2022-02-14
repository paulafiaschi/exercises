// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// sayHello("Robert");

// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
// }

// presentPet("Robert", "dog", "Simba");
// let str = "ignacio";

function capitalize(str) {
  let firtsLetter = str.charAt(0).toUpperCase();
  let restOfName = str.substring(1).toLowerCase();
  console.log(`${firtsLetter}${restOfName}`);
  // console.log(str.charAt(0).toUpperCase());
  // console.log(str.substring(1));
}

let unNombre = "aiLin";
capitalize(unNombre);

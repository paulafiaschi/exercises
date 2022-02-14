let queues = [1, 6, 27, 3, 23, 8, 15, 2, 11, 26, 19, 5, 32, 10, 14, 27, 30, 21, 12, 20, 1, 6, 27, 3, 23, 8, 15, 2, 11, 26, 19, 5, 32, 10, 14, 27, 30, 21, 12, 20];

let iterator = queues.entries();
console.log

let allBars = document.querySelectorAll(".bar");

// allBars[4].style.height = "5rem";

function modifyQueues() {
  queues.push(32);
  queues.shift();
}

// function changeHeight() {
//   document.querySelector(".bar" + Number.iterator).style.height = queues[iterator] + "rem";
//   console.log("index of" + Number.iterator);
//   console.log("height changed");
//   console.log(queues[iterator]);
// }

// changeHeight();
modifyQueues();

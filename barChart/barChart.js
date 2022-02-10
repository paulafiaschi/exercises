let queues = [1, 6, 27, 3, 23, 8, 15, 2, 11, 26, 19, 5, 32, 10, 14, 27, 30, 21, 12, 20, 1, 6, 27, 3, 23, 8, 15, 2, 11, 26, 19, 5, 32, 10, 14, 27, 30, 21, 12, 20];

function modifyQueues() {
  queues.push(32);
  queues.shift();
}

function changeHeight() {
  document.querySelector(".bar").style.height = queues[10] + "rem";
  console.log("height changed");
  console.log(queues[10]);
}

changeHeight();
modifyQueues();

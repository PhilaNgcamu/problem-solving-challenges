// Hackerrank > Electronics Shop
function getMoneySpent(keyboards, drives, b) {
  // compare the keyboard price with the usb price
  let array = [];
  for (let i = 0; i < keyboards.length; i++) {
    let keyboard = keyboards[i];
    for (let j = 0; j < drives.length; j++) {
      // -- if the price of both <= 60, store in an array
      if (keyboard + drives[j] <= b) array.push(keyboard + drives[j]);
    }
  }
  return !array.length ? "-1" : Math.max(...array);

  // --- return the max cost in the array else -1
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));

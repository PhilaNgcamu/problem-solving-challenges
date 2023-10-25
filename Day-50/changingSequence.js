// For this challenge you will determine when an array changes sequences.
// have the function ChangingSequence(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.

const arr = [1, 2, 4, 6, 4, 3, 1];
function changingSequence(arr) {
  let increase;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      if (increase === true) {
        return i;
      }
      increase = false;
    } else if (arr[i] < arr[i + 1]) {
      if (increase === false) {
        return i;
      }
      increase = true;
    }
  }
  return -1;
}

[1, 2, 4, 6, 4, 3, 1];

function changingSequence(arr) {
  let increase;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        if (increase === false) {
          return i;
        }
        increase = true;
      } else if (arr[j] < arr[i]) {
        if (increase === true) {
          return i;
        }
        increase = false;
      }
      i++;
    }
  }
  return -1;
}

console.log(changingSequence(arr));

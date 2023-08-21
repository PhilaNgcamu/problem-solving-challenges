//Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// 1. Naive Solution - Time complexity/Linear Search
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

// 1. Refactor - Time Complexity - Log(N) - Binary Search
function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor(min + max / 2);
    let currentElement = arr[middle];

    if (arr[middle] < num) min = middle + 1;
    else if (arr[middle] > num) {
      max = middle - 1;
    } else return middle;
  }
  return -1;
}
console.log(search([1, 2, 3, 4, 5, 6], 4));

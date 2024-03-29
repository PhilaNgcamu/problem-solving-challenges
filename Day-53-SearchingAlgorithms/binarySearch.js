// Binary Search Pseudocode:
// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array.
// While the left pointer comes before the right pointer:
//--> Create a pointer in the middle
//--> if you find the value you want, return the index
//--> if the value is too small, move the left pointer up
//--> if the value is too large, move the right pointer down
//If you never find the value, return -1

function binarySearch(arr, elem) {
  let start = 0; //index
  let end = arr.length - 1; //index
  let middle = Math.floor((start + end) / 2); //index
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
function binarySearch(arr, elem, start = 0, end = arr.length - 1) {
  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === elem) return middle;
  if (start > end) return -1;
  if (elem < arr[middle]) {
    return binarySearch(arr, elem, start, middle - 1);
  } else {
    return binarySearch(arr, elem, middle + 1, end);
  }
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5));
//[2, 5, 6, 9, 13, 15, 28]
// S        M           E

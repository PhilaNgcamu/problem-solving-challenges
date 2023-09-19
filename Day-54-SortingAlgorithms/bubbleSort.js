// Bubble sort: ES5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
// Bubble sort: ES6
const swap2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Bubble sorting: A naive approach
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        //SWAP!
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);

  return arr;
}

// Bubble sorting: An optimized approach - useful for when there's a nearly sorted array
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i > 0; i--) {
    //Assume no swaps will to take place
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(arr);

  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

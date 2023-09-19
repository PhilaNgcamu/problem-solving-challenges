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

bubbleSort([37, 45, 29, 8, 23, -9]);

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
  for (let i = 0; i < arr.length; i++) {
    console.log(arr);

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);

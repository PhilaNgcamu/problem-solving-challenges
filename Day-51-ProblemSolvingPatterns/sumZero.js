//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if pair doesn't exist

// 1. Simpler/Naive Solution - Time Complexity O(N^2) and Space Complexity - O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

// 2. Refactor - Time Complexity - O(N) and Space Complexity O(N)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    if (sum > 0) right--;
    else left++;
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

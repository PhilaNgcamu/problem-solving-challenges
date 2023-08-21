//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// 1. Naive approach - where program takes O(n^2) time because of the indexOf method and the for loop
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// 2. Refactored - Time Complexity - O(n): 2 separate loops -> O(2N)--> O(N)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const frequencyCounterOne = {};
  const frequencyCounterTwo = {};
  for (const val of arr1) {
    frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
  }
  for (const key in frequencyCounterOne) {
    if (frequencyCounterOne[key] !== frequencyCounterTwo[key ** 2])
      return false;
    if (!(key ** 2 in frequencyCounterTwo)) return false;
  }
  console.log(frequencyCounterOne, frequencyCounterTwo);
  return true;
}
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

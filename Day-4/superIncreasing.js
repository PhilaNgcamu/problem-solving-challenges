// For this challenge you will determine if each number is greater than the sum of all previous elements in an array.
// have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a super-increasing sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false"
function Superincreasing(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i - 1];
    if (arr[i] < sum) return "false";
  }
  return "true";
}

console.log(Superincreasing([1, 2, 5, 10]));

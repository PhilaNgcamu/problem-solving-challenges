// Hackerrank > Picking Numbers
function pickingNumbers(a) {
  // find the subarrays that are two elements <= 1;
  let maxCount = 0;
  let array = a.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    let currentCount = 1;
    for (let j = 0 + 1; j < array.length; j++) {
      if (i > 0) {
      }
      if (Math.abs(array[i] - array[j]) <= 1) {
      }
    }
  }
  return array;

  // then find the longest array and return its length
}
console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));

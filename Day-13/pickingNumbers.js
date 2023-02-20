// Hackerrank > Picking Numbers
function pickingNumbers(a) {
  // find the subarrays that are two elements <= 1; and store them in an array
  const array = [];
  for (let i = 0; i < a.length; i++) {
    const arr = [];
    arr.push(a[i]);
    for (let j = 0; j < a.length; j++) {
      if (i === j) continue;
      if (Math.abs(a[i] - a[j]) <= 1) {
        arr.push(a[j]);
      }
    }
    array.push(arr);
  }
  return array.sort((a, b) => a.length - b.length)[array.length - 1].length;
  // then find the longest array and return its length
}
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));

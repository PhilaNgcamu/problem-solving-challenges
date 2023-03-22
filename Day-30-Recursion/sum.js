// Write a JavaScript program to compute the sum of an array of integers.

function sum(array) {
  if (array.length === 1) return array[0];
  return array.shift() + sum(array);
}

console.log(sum([1, 2, 3, 4, 5]));

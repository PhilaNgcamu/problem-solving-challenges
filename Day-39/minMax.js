//Find the Maximum and Minimum: Write a function to find the maximum and minimum values in an array.

function minMax(arr) {
  const array = [...arr];
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }
  return [min, max];
}

console.log(minMax([-4, 4, 2, 5, 33, 5, 9, 19]));

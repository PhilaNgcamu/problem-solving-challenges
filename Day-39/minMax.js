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

function minMax(arr) {
  const array = [...arr];
  let min = array[0];
  let max = array[0];
  let i = 1;
  while (i < array.length) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
    i++;
  }
  return [min, max];
}

function minMax(arr) {
  const array = [...arr];
  const sortedArr = array.sort((a, b) => a - b);
  return [sortedArr[0], sortedArr.at(-1)];
}

function minMax(arr) {
  const array = [...arr];
  let min = array[0];
  let max = array[0];
  let i = 1;
  for (const num of array) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return [min, max];
}

console.log(minMax([-4, 4, 2, 5, 33, 5, 9, 19]));

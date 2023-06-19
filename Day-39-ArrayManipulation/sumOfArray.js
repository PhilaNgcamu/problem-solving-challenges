//Sum of Array Elements: Write a function to calculate the sum of all elements in an array.
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function sumOfArray(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }

  return sum;
}

function sumOfArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

function sumOfArray(arr) {
  return arr.reduce((res, num) => res + num, 0);
}

console.log(sumOfArray([1, 2, 3, 4, 5]));

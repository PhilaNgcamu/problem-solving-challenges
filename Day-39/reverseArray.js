function reverseArray(arr) {
  const array = [...arr];
  const result = [];
  let i = array.length - 1;
  while (i >= 0) {
    result.push(arr[i]);
    i--;
  }
  return result;
}

function reverseArray(arr) {
  const array = [...arr];
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function reverseArray(arr) {
  const array = [...arr];
  const result = [];
  for (const elem of array) {
    result.unshift(elem);
  }
  return result;
}

function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 3]));

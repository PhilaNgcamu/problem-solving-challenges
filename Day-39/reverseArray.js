function reverseArray(arr) {
  const array = [...arr];
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// function reverseArray(arr) {
//     const array = [...arr];
//     const result = [];
//     for (const elem of array) {
//       result.push(elem);
//     }
//     return result;
//   }

console.log(reverseArray([1, 2, 3, 4, 5]));

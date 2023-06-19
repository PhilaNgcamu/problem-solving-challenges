//Remove Duplicates: Write a function to remove duplicate elements from an array.
function removeDuplicates(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = arr[i];
  }
  return Object.values(obj);
}

console.log(
  removeDuplicates([
    1, 1, 1, 13, 3, 3, 3, 32, 42, 4, 5, 5, 5, 7, 735, 3, 2, 1, 5,
  ])
);

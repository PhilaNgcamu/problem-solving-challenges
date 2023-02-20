function circularArrayRotation(a, k, queries) {
  // k == number of rotations
  // make a new array of a.length
  let array = Array(a.length);
  for (let i = 0; i < k; i++) {
    array[k - i] = a[a.length - 1 - i];
  }
  array[k] = a[a.length - 3];
  array[k - 1] = a[a.length - 1];
  array[k - 2] = a[a.length - 2];

  return array;
}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

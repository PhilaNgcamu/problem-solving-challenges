function circularArrayRotation(a, k, queries) {
  // k == number of rotations
  // make a new array of a.length
  let array = [];
  for (let i = 0; i < a.length; i++) {
    if (i === 0) {
      array[k] = a[1];
    } else array[i] = a[k - 2];
  }
  // k == 2
  array[0] = a[1];
  array[1] = a[2];
  array[2] = a[0];

  // [4,5,3]
  return array;
}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

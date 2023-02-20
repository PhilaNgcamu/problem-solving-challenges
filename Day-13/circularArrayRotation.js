function circularArrayRotation(a, k, queries) {
  // k == number of rotations
  // locate to the index to start at by n - k = a[index]
  //then add i in n - k to move to the next element then push it
  // use modulo to the start of the array again
  let array = [];

  for (let i = 0; i < queries.length; i++) {
    array.push(a[(queries.length - k + i) % queries.length]);
  }
  return array;
}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

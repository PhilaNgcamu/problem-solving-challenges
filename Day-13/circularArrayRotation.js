function circularArrayRotation(a, k, queries) {
  // k == number of rotations
  // pop first and unshift k times
  // then return the queries
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  let array = [];
  for (let i of queries) {
    array.push(a[i]);
  }
  return array;
}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));

//Codewars > Count By X
function countBy(x, n) {
  //store the multiples of x until the numbers == n
  let z = [];
  let multiple = 0;
  //use a for loop of i and push the muliples of x
  for (let i = 1; i <= n; i++) {
    multiple += x;
    z.push(multiple);
  }
  //return z
  return z;
}
console.log(countBy(1, 10));

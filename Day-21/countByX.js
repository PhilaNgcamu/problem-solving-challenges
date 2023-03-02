//Codewars > Count By X
function countBy(x, n) {
  //store the multiples of x until the numbers == n
  let z = [];
  //use a for loop of i and push the muliples of x
  for (let i = 1; i <= n; i++) {
    z.push(x * 2);
  }
  //return z
  return z;
}
console.log(countBy(1, 10));

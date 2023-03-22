// Find the product of a number
function product(num) {
  if (num === 1) return 1;
  return num * product(num - 1);
}

console.log(product(3));

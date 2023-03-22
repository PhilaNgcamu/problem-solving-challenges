// Write a JavaScript program to compute the exponent of a number.

function power(num, exponent) {
  if (exponent === 0) return 1;
  return num * power(num, exponent - 1);
}

console.log(power(2, 3));

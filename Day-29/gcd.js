// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(x, y) {
  if (!y) return x;
  return gcd(x, x % y);
}
console.log(gcd(12, 37));

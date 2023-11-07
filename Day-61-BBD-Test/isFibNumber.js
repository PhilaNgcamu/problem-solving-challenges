function isFibonacciNumber(n, a = 0, b = 1) {
  if (n < 0) {
    return false; // Negative numbers are not part of the Fibonacci sequence.
  }

  if (n === a || n === b) {
    return true; // The number is found in the Fibonacci sequence.
  }

  if (b > n) {
    return false; // The number is not part of the Fibonacci sequence.
  }

  // Recursively check the next Fibonacci number.
  return isFibonacciNumber(n, b, a + b);
}

console.log(isFibonacciNumber(5)); // Output: true 5
console.log(isFibonacciNumber(8)); // Output: true 8
console.log(isFibonacciNumber(9)); // Output: false 9
console.log(isFibonacciNumber(13)); // Output: true 3
console.log(isFibonacciNumber(20)); // Output: false 20

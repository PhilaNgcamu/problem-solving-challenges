// For this challenge you will be returning a certain prime number.
// have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.

function PrimeMover(num) {
  let count = 0;
  let i = 1;
  while (count < num) {
    if (isPrime(i)) {
      count++;
    }
    if (count === num) break;
    i++;
  }
  return i;
}
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(PrimeMover(16));

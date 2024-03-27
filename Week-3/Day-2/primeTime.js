// For this challenge you will be determining if an argument is a prime number.
// have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
// Prime Numbers are numbers that can only be divided by 1 and themselves.
function PrimeTime(num) {
  for (let i = 1; i < Math.pow(2, 16); i++) {
    if (num === i) continue;
    if (num === 1) return true;
    if (num % i === 0) {
      return false;
    }
    return false;
  }
}

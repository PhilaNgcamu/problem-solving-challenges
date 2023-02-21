// Hackerrank > Find Digits
function findDigits(n) {
  let numbers = n.toString().split("");
  let count = 0;
  for (let i = 0; i <= numbers.length; i++) {
    if (n % Number(numbers[i]) === 0) count++;
  }
  return count;
}
console.log(findDigits(124));

//  For this challenge you will determine the largest double digit number.
// have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits.

function LargestPair(num) {
  let array = [];
  let numbers = num.toString();
  for (let i = 0; i < numbers.length; i++) {
    array.push(Number(numbers.slice(i, i + 2)));
  }
  return Math.max(...array);
}

console.log(LargestPair(5673536634));

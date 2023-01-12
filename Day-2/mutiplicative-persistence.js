// For this challenge you will be determining the multiplicative persistence for a given number.
// have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.
function MultiplicativePersistence(num) {
  if (String(num).length === 1) return 0;
  //have a variable that converts number into a string and separate the numbers
  let digits = String(num).split("");
  let count = 1;
  let length = digits.length;
  //then, use a for loop to check if the digits'length is greater than one, if it is increment count by 1
  for (let i = 0; i < length; i++) {
    digits = digits.reduce((a, b) => Number(a) * Number(b));
    if (String(digits).length > 1) {
      count++;
    }
    digits = String(digits).split("");
  }
  return count;
}

console.log(MultiplicativePersistence(20));

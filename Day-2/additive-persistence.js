// For this challenge you will be determining the additive persistence for a given number.
// have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

function AdditivePersistence(num) {
  if (String(num).length === 1) return 0;
  //have a variable that converts number into a string and separate the numbers
  let digits = String(num).split("");
  let count = 1;
  let length = digits.length;
  //then, use a for loop to check if the digits'length is greater than one, if it is increment count by 1
  for (let i = 0; i < length; i++) {
    digits = digits.reduce((a, b) => Number(a) + Number(b), 0);
    if (String(digits).length > 1) {
      count++;
    }
    digits = String(digits).split("");
  }
  return count;
}

console.log(AdditivePersistence(19));

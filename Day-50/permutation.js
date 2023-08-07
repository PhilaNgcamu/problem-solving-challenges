// For this challenge you will determine the next greatest number using the same numbers of a given argument.
// have the function PermutationStep(num) take the num parameter being passed and return the next number greater than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).
function getPermutations(num) {
  const strNum = num.toString();

  if (strNum.length === 1) {
    return [strNum];
  }

  const result = [];

  for (let i = 0; i < strNum.length; i++) {
    const digit = strNum[i];
    const remainingDigits = strNum.slice(0, i) + strNum.slice(i + 1);
    const permutations = getPermutations(remainingDigits);

    for (const perm of permutations) {
      result.push(digit + perm);
    }
  }

  return result;
}

// Test with the number 123
const num = 123;
const permutations = getPermutations(num);
console.log(permutations);

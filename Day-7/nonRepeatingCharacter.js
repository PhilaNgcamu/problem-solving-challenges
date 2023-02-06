// For this challenge you will find the first non-repeating character in a string.
// have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character.

function NonrepeatingCharacter(str) {
  let array = str.split("");
  const letters = {};

  for (let i = 0; i < array.length; i++) {
    if (letters.hasOwnProperty(array[i])) {
      letters[array[i]]++;
    } else letters[array[i]] = 1;
  }
  for (let i = 0; i < array.length; i++) {
    if (letters[array[i]] === 1) return array[i];
  }
}

console.log(NonrepeatingCharacter("agettkgaeee"));

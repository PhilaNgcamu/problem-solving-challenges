// For this challenge you will determine if a pair of even numbers exists somewhere in a string.
// have the function EvenPairs(str) take the str parameter being passed and determine if a pair of adjacent even numbers exists anywhere in the string. If a pair exists, return the string true, otherwise return false. For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the string, "46" so your program should return the string true. Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should return the string true.
function EvenPairs(str) {
  let numbers = str.split(/[^0-9]/g).filter(Boolean);

  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      if (Number(numbers[i][j]) % 2 === 0) count++;
    }
    if (count === 2) return "true";
    count = 0;
  }
  return "false";
}

console.log(EvenPairs("fdfs1386eretre"));

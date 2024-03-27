// For this challenge you will determine the Run Length Encoding of a string.
// have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

function runLength(str) {
  const arr = str.split("");
  const obj = {};
  for (const letter of arr) {
    obj[letter] = (obj[letter] || 0) + 1;
  }
  return Object.keys(obj)
    .map((key) => `${obj[key]}${key}`)
    .join("");
}

console.log(runLength("wwwggopp"));

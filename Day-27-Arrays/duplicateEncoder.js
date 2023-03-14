// Codewars > Duplicate Encoder
function duplicateEncode(word) {
  // All the words should be in lower case, then split the word string
  let array = word.toLowerCase().split("");
  // map over each letter and ... if the index of the letter === last index of the letter then return "(" else ")"
  let char = array.map((letter, _, word) =>
    word.indexOf(letter) === word.lastIndexOf(letter) ? "(" : ")"
  );
  //return the joined char
  return char.join("");
}

console.log(duplicateEncode("recede"));

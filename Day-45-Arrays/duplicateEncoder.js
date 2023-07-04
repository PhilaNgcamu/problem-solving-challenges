// Codewars > Duplicate Encoder

function duplicateEncode(word) {
  const lowercasedWord = word.toLowerCase();
  //have an object to store letters with their occurances
  const letters = {};
  //have a for loop on the word
  //--> if letter exists increment by 1, else assign 1 to then letter on that object
  for (let i = 0; i < lowercasedWord.length; i++) {
    letters[lowercasedWord[i]] = (letters[lowercasedWord[i]] || 0) + 1;
  }

  let result = "";
  //Have for loop on the lowercasedWord
  //--> if letter in lowercasedWord is > 1 then assign ")", else "("
  for (let i = 0; i < lowercasedWord.length; i++) {
    if (letters[lowercasedWord[i]] === 1) result += "(";
    else result += ")";
  }
  return result;
}

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((letter, _index, array) =>
      array.indexOf(letter) === array.lastIndexOf(letter) ? "(" : ")"
    )
    .join("");
}
console.log(duplicateEncode("Philasande"));

// Codewars > Counting Duplicates
function duplicateCount(text) {
  //declare array = []
  const array = [];
  //split the text
  const word = text.toLowerCase().split("");
  //use 2 for loop to check the repeating letter if exists push it to the array and remove it
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (i === j) continue;
      else if (word[i] === word[j]) {
        array.push(word[j]);
        word.splice(j, 1);
      }
    }
  }
  return new Set(array).size;
}
console.log(duplicateCount("Indivisibilities"));

// Codewars > Reverse words
function reverseWords(str) {
  //split the str by space
  const array = str.split(" ");
  //map over each element and reverse the word and then join it and return it
  return array.map((word) => word.split("").reverse().join("")).join(" ");
}
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

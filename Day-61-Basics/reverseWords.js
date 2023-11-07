function reverseString(input) {
  // Split the input string into words and non-word characters
  const wordsAndNonWords = input.match(/(\w+|\W+)/g);

  // Reverse each word and keep the non-word characters unchanged
  const reversedWords = wordsAndNonWords.map((item) => {
    // Check if it's a word (sequence of word characters)
    if (/^\w+$/.test(item)) {
      // Reverse the word
      return item.split("").reverse().join("");
    } else {
      // Keep non-word characters unchanged
      return item;
    }
  });

  // Join the reversed words and non-word characters to get the result
  return reversedWords.join("");
}

const input = "Hello, World! Nice2";
const reversed = reverseString(input);
console.log(reversed); // Output: "olleH, dlroW!"

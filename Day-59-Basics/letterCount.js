// For this challenge you will determine which word has the greatest number of
// repeated letters.
// take the str parameter being passed and return the first word with the
// greatest number of repeated letters. For example: "Today, is the greatest day
// ever!" should return greatest because it has 2 e's (and 2 t's) and it comes
// before ever which also has 2 e's. If there are no words with repeating letters
// return -1. Words will be separated by spaces.
function letterCountI(str) {
  // 1. How can we restate the problem, in your own words?
  // -- Determine which word has the greatest number of repeated letters in a string.

  // 2. What are the inputs that go into the problem?
  // -- String of words

  // 3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)
  // -- Input: Today, is the greatest day
  // ever! --> Output: greatest

  // 4. Break down the problem (pseudocode)
  // Create a variable to store the currentWord with the greatest number of repeated letters
  let currentWord = "";
  // Create a variable to store the maxLetterCount and equate to zero of repeated letters
  let maxLetterCount = 0;
  // Split the str by empty string, then filter for only letters and whitespace, then join by an empty string and split by whitespace and finally store it in the created "arr" variable
  const arr = str
    .split("")
    .filter((char) => /[a-z ]/i.test(char))
    .join("")
    .split(" ");

  // Use a nested for...of loop to traverse through each word and each letter in a lowercased word
  for (const word of arr) {
    // Use an object to count the frequency of the letters in an object
    const letterCountObj = {};
    const lowercasedWord = word.toLowerCase();
    for (const letter of lowercasedWord) {
      letterCountObj[letter] = (letterCountObj[letter] || 0) + 1;
      // If the frequency of the letter > maxLetterCount, then maxLetterCount = frequency of the letter and currentWord = word
      if (letterCountObj[letter] > maxLetterCount) {
        currentWord = word;
        maxLetterCount = letterCountObj[letter];
      }
    }
  }

  // Return the word
  return maxLetterCount === 1 ? -1 : currentWord ;

  // 5. refactor the solved problem (if possible)
}

console.log(letterCountI("hello apple pie")); //hello
console.log(letterCountI("the greatest, i am the greatest")); //greatest
console.log(letterCountI("today is the greatest day ever")); //greatest
console.log(letterCountI("ab cd ef gh ij kl mn")); //-1
console.log(letterCountI("no words")); //-1
console.log(letterCountI("bb ccc")); //ccc

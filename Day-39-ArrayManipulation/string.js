let str = "xxxxXX";

console.log(
  str.replace(/x/gi, (matched, value1, value2, offset, input) => {
    if (matched === "x") {
      return (matched = String.fromCharCode(
        97 + Math.round(Math.random() * (122 - 97))
      ));
    }
    return (matched = String.fromCharCode(65 + Math.round(Math.random() * 25)));
  })
);
// Challenge: Determine if a string is a pangram (contains all the letters of the alphabet).
// Example:
// Input: 'The quick brown fox jumps over the lazy dog'
// Output: true
// Method(s) to use: Combination of split(), filter(), test() and custom logic(Set is allowed).

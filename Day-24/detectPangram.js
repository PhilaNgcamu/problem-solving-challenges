// Codewars > Detect Pangram
function isPangram(string) {
  const str = string
    .split("")
    .filter((letter) => /[a-z]/gi.test(letter))
    .join("")
    .toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((letter) => str.indexOf(letter) !== -1);
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));

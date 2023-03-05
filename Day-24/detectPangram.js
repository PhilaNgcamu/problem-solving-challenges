// Codewars > Detect Pangram
function isPangram(string) {
  const array = string
    .split("")
    .filter((letter) => /[a-z]/gi.test(letter))
    .join("");
  return array;
}
console.log(isPangram("This is not a pangram."));

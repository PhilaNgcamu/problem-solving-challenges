// Hackerrank > Append And Deleted
function appendAndDelete(s, t, k) {
  let firstWord = s.split("");
  let secondWord = t.split("");
  let operations = k;

  console.log(firstWord + "\n" + secondWord);

  if (k >= firstWord.length + secondWord.length) return "Yes";

  let cut = Math.min(firstWord.length, secondWord.length);
  let min = Math.min(firstWord.length, secondWord.length);

  for (let i = 0; i < min; i++) {
    if (firstWord[i] !== secondWord[i]) {
      cut = i;
      break;
    }
  }

  operations -= firstWord.length - cut + (secondWord.length - cut);

  if (operations >= 0 && operations % 2 === 0) return "Yes";
  return "No";
}
console.log(appendAndDelete("hackerhappy", "hackerrank", 11));

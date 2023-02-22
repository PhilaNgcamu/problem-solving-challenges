//Hackerrank > Repeated string
function repeatedString(s, n) {
  //determine the number of As
  let a =
    s.split("").filter((a) => a === "a").length * Math.floor(n / s.length);
  //check for the remaining a's
  let remainingStringLength = n % s.length;
  // return the occurance of a
  return (a += s
    .slice(0, remainingStringLength)
    .split("")
    .filter((a) => a === "a").length);
}
console.log(repeatedString("abcac", 13));

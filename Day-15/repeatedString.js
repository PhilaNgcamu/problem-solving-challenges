//Hackerrank > Repeated string
function repeatedString(s, n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s[i % s.length];
  }
  return 5 % s.length;
}
console.log(repeatedString("abcac", 10));

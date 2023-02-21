function appendAndDelete(s, t, k) {
  let word = s.slice(0, s.indexOf(s.slice(-Math.ceil(k / 2))));
  k = k - Math.ceil(k / 2);
  let second = t.slice(-k);
  return t === word + second ? "Yes" : "No";
}
console.log(appendAndDelete("hackerhappy", "hackerrank", 9));

function appendAndDelete(s, t, k) {
  s.slice(-Math.ceil(k / 2));
  k = k - Math.ceil(k / 2);
  t.slice(-k);
  return s.slice(0, 6) + t.slice(-k);
}
console.log(appendAndDelete("hackerhappy", "hackerrank", 9));

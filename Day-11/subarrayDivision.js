function birthday(s, d, m) {
  // squares of the bars(s) = array of integers(d)
  // segment - squares (m) = length = Ron's birth month
  // sum of the integers in the array(squares) = Ron's birth day (d) segment
  if (s.length === 1 && s[0] === m) return m;
  let count = 0;
  for (let j = 0; j < s.length; j += 2) {
    if (s[j] + s[j + 1] === d || s[j] + s[j - 1] === d) count++;
  }
  return count;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));

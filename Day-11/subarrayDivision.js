function birthday(s, d, m) {
  // squares of the bars(s) = array of integers(d)
  // segment - squares (m) = length = Ron's birth month
  // sum of the integers in the array(squares) = Ron's birth day (d) segment
  let count = 0;
  let sub = [];
  for (let j = 0; j < s.length; j++) {
    sub.push(s[j]);
    for (let i = j; i < s.length; i++) {
      sub.push(s[i]);
      if (sub.length === m && sub.reduce((a, b) => a + b, 0) === d) {
        count++;
        sub = [];
      }
    }
  }
  return count;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));

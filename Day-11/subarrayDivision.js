function birthday(s, d, m) {
  // squares of the bars(s) = array of integers(d)
  // segment - squares (m) = length = Ron's birth month
  // sum of the integers in the array(squares) = Ron's birth day (d) segment
  let count = 0;
  let sub = s;
  let array;
  if (s.length === 1 && s[0] === d) return 1;
  for (let j = 0; j < s.length; j++) {
    array = sub.slice(j, m + j);
    if (array.reduce((a, b) => a + b, 0) === d) {
      count++;
    }
  }
  return count;
}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));

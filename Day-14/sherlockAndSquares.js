// Hackerrank > Sherlock and Squares
function squares(a, b) {
  let count = 0;
  let square;
  for (let i = 1; i <= b; i++) {
    square = i * i;
    if (square >= a && square <= b) count++;
  }
  return count;
}
console.log(squares(24, 49));

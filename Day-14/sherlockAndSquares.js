// Hackerrank > Sherlock and Squares
function squares(a, b) {
  //Use the square range equation, where sqrt of upper range - sqrt of upper range + 1 === number of sqrtes left
  let squareA = Math.ceil(Math.sqrt(a));
  let squareB = Math.ceil(Math.sqrt(b));

  return squareB - squareA + 1;
}
console.log(squares(24, 49));

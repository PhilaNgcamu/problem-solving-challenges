// Codewars > Square Sum
function squareSum(numbers) {
  //iterate through the array and each element should be transformed by the power of 2
  let squares = numbers.map((number) => number ** 2);
  //after the iteration, use reduce to find the sum of the squares
  return squares.reduce((a, b) => a + b, 0);
}

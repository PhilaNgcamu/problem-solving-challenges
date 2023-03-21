// Write a JavaScript program to get the integers in range (x, y)
function range(x, y) {
  if (x === y) return y - 1;
  return [x + 1, range(x + 1, y)].flat();
}
console.log(range(2, 9));

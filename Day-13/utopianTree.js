// Hackerrank > Utopian Tree
function utopianTree(n) {
  // use a for loop where i % 2 === 0 === "spring" else "summer"
  // if spring, maxHeight * 2 else maxHeight + 1
  // return maxHeight
  let maxHeight = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) maxHeight *= 2;
    else maxHeight += 1;
  }
  return maxHeight;
}
console.log(utopianTree(7));

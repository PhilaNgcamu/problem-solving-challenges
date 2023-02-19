// Hackerrank > Cats And A Mouse
function catAndMouse(x, y, z) {
  let catA = Math.abs(z - x);
  let catB = Math.abs(z - y);
  return catB > catA ? "Cat A" : catB < catA ? "Cat B" : "Mouse C";
}

console.log(catAndMouse(2, 5, 4));

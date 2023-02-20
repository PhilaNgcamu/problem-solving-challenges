// Hackerrank > The Hurdle Race
function hurdleRace(k, height) {
  // determine the highest hurdle, if highest > k then return highest - k
  // else return 0
  let max = Math.max(...height);
  if (max > k) return max - k;
  return 0;
}

console.log(hurdleRace(5, [1, 6, 3, 5, 2]));

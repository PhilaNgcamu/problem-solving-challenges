// Hackerrank > Counting Valleys
function countingValleys(steps, path) {
  let count = 0;
  let valley = 0;
  //use for loop for each step
  for (let i = 0; i < steps; i++) {
    //if count is 0 and the step is downhill then valley++
    if (count === 0 && "D" === path[i]) {
      count--;
      valley++;
    } else if ("D" === path[i]) {
      count--;
    } else count++;
  }
  return valley;
}
console.log(countingValleys(8, "DDUUDDUDUUUD"));

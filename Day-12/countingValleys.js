function countingValleys(steps, path) {
  let count = 0;
  let valley = 0;
  for (let i = 0; i < 8; i++) {
    if ("U" === path[i]) count++;
    else count--;
    //DDUUDDUDUUUD
  }
  return valley;
}
console.log(countingValleys(8, "DDUUDDUDUUUD"));

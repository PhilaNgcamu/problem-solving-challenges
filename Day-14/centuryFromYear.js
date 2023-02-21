// Codewars > century from year
function century(year) {
  let count = 0;
  for (let i = 0; i < year; i++) {
    if (i % 100 === 0) count++;
  }
  return count;
}

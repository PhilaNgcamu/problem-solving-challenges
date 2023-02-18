//Hackerrank > implementation - Apple and Orange

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // s = starting point = 7, t = endpoint = 10
  // a = apple tree = 4, b = orange tree = 12
  // m = apples = 3, n = 3 oranges
  // apples(m) = [2, 3, -4], oranges(n) = [3, -2, -4] - where the each apple/orange is at, a + apples/oranges[index] = the position of the fruits
  apples = apples.map((unit) => a + unit);
  oranges = oranges.map((unit) => b + unit);
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] >= s && apples[i] <= t) appleCount++;
  }
  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] >= s && oranges[i] <= t) orangeCount++;
  }
  console.log(appleCount);
  console.log(orangeCount);
}

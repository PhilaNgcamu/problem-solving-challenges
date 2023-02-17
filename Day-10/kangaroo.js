//Hackerrank - Implementation > Number Line
function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let sum1 = x1;
  let sum2 = x2;
  for (let i = 0; i <= 10000; i++) {
    sum1 += v1;
    sum2 += v2;
    if (sum1 === sum2) return "YES";
  }
  return "NO";
}

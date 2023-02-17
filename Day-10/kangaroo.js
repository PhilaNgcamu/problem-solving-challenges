//Number
function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  for (let i = 0; i <= 10000; i++) {
    sum1 += v1;
    sum2 += v2;
    if (sum1 === sum2) return "YES";
  }
  return "NO";
}

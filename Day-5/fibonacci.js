function fibonacci(n) {
  if (n <= 1) return n;
  let x = 0,
    y = 1,
    z;
  for (let i = 2; i <= n; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  console.log(z);
}

fibonacci(6);

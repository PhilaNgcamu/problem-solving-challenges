//Exercise: find the factorial of "n"
function factorial(n) {
  if (n === 1) return 1;
  else {
    return n * factorial(n - 1);
  }
}

// 10 * (9 * (8 * (7 * (6 * (5 * (4 * (3 * (2 * 1)))))))) = 3628800

console.log(factorial(10));

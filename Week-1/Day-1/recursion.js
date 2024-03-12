//Exercise: find the factorial of "n"
function factorial(n) {
  if (n === 1) return 1;
  else {
    return n * factorial(n - 1);
  }
}

// 10 * (9 * (8 * (7 * (6 * (5 * (4 * (3 * (2 * 1)))))))) = 3628800

//console.log(factorial(10));

//Exercise: write the function fib(3) where 3 is the nth Fibonacci number
function fib(n) {
  if (n <= 1) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

//console.log(fib(4));

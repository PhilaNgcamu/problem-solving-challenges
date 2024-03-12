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

//Example: count down from 10 to 1: countDown(10);
function countDownRecursive(n) {
  if (n === 1) console.log(n);
  else {
    console.log(n);

    return countDownRecursive(n - 1);
  }
}
//console.log(countDown(10));

//Example: Sum of numbers

function sum(n) {
  if (n === 1) return 1;
  else return n + sum(n - 1);
}

//console.log(sum(10));

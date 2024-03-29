// Find the nth fibonacci number
// Where: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34....
// Steps:
// Find the 3rd Fibonacci number:
// f2 = f2-2 + f2-1 = 0 + 1 = 1
//f3 = f3-2 + f3-1 = 1 + 1 = 2
//Therefore, fn = fn-2 + fn-1

function main() {
  console.log(fibo(7));
}

function fibo(num) {
  if (num < 2) return num;
  return fibo(num - 1) + fibo(num - 2);
}
main();

//fib(2) = fib(1) + fib(0) = 1 + 0 = 1
//fib(3) = fib(2) + fib(1) = 1 + 1 = 2
//fib(4) = fib(3) + fib(2) = 2 + 1 = 3
//fib(5) = fib(4) + fib(3) = 3 + 2 = 5

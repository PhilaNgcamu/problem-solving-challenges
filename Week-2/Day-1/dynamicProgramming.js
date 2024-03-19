function fib(n, memo) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  else {
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return memo[n];
  }
}

console.log(fib(5, []));

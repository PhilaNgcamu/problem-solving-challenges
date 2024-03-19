// Recursive solution
function fib(n, memo) {
  if (memo[n]) return memo[n];
  else {
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return memo[n];
  }
}

console.log(fib(1000, [undefined, 1, 1]));

// Tabulation

function fib(n) {
  //Known value of fib(1) and fib(2)
  //using an index to find the nth number
  let tab = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    tab[i] = tab[i - 1] + tab[i - 2];
  }
  return tab[n];
}

console.log(fib(1000));

// The number of operations below is O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// The number of operations below is O(1)

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

addUpTo(1000000000);

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now();
addUpTo(10000000000);
const t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

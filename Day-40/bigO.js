function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
addUpTo(1000000000);

const t1 = performance.now();
console.log(`Time Elapsed: ${t1 / 1000} seconds`);

const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

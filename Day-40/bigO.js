// function addUpTo(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const t1 = performance.now();
console.log(`Time Elapsed: ${t1 / 1000} seconds`);
addUpTo(1000000000);

const t2 = performance.now();
console.log(`Time Elapsed: ${t2 / 1000} seconds`);

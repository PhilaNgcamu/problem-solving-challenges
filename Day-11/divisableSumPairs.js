//Hackerrank > Implementation > Divisab;le Sum Pairs

function divisibleSumPairs(n, k, ar) {
  // i < j and ar[i] + ar[j] = k, k > 0
  let array = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) array.push([ar[i], ar[j]]);
    }
  }
  return array.length;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));

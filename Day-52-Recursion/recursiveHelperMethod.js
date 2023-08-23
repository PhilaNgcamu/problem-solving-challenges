const result = [];

function collectOddValues(arr) {
  if (!arr.length) return;
  else if (arr[0] % 2 !== 0) result.push(arr[0]);
  result.slice(1);
}

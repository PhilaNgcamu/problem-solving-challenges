//Hackerrank > Beautiful Days
function beautifulDays(i, j, k) {
  let count = 0;
  for (let s = i; s <= j; s++) {
    let num = Number(s.toString().split("").reverse().join(""));
    console.log(num);
    if (Math.abs(i - num) % k === 0) count++;
  }
  return count++;
}

console.log(beautifulDays(201, 205, 11));

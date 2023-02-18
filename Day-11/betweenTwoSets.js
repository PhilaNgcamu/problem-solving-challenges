//Hackerrank > Implementation > Between Two Sets

function getTotalX(a, b) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let multiples1 = [];
  let multiples2 = [];
  let factors1 = [];
  let factors2 = [];
  for (let i = 0; i <= 100; i++) {
    if (sum1 <= b[1]) {
      sum1 += a[0];
      multiples1.push(sum1);
    }
  }
  for (let i = 0; i <= 100; i++) {
    if (sum2 <= b[1]) {
      sum2 += a[1];
      multiples2.push(sum2);
    }
  }
  for (let i = 0; i <= 100; i++) {
    if (b[0] % i === 0 && i <= b[0]) {
      factors1.push(i);
    }
  }
  for (let i = 0; i <= 100; i++) {
    if (b[1] % i === 0 && i <= b[1]) {
      factors2.push(i);
    }
  }
  let array1 = [];
  for (let i = 0; i < multiples1.length; i++) {
    if (factors1.includes(multiples1[i]) && factors2.includes(multiples1[i]))
      array1.push(multiples1[i]);
  }
  let array2 = [];
  for (let i = 0; i < multiples2.length; i++) {
    if (factors2.includes(multiples2[i]) && factors1.includes(multiples2[i]))
      array2.push(multiples2[i]);
  }
  let output = [];
  for (let i = 0; i < 10; i++) {
    if (array1.includes(array2[i])) output.push(array1[i]);
  }
  return output.length;
}

console.log(getTotalX([2, 4], [24, 36]));

function printNumbersVersionOne() {
  let num = 2;
  while (num <= 100) {
    if (num % 2 === 0) {
      console.log(num);
    }
    num++;
  }
}

function printNumbersVersionTwo() {
  let num = 2;
  while (num <= 100) {
    console.log(num);
    num += 2;
  }
}

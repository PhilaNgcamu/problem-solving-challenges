function countDown(n) {
  let nextNumber = n;
  if (nextNumber === 1) {
    console.log(nextNumber);
  } else {
    console.log(nextNumber);
    countDown(nextNumber - 1);
  }
}
countDown(3);

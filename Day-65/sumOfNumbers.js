function getSum(a, b) {
  const numbersBetwnAandB = [];

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    numbersBetwnAandB.push(i);
  }
  console.log(numbersBetwnAandB);
  return numbersBetwnAandB.reduce((a, b) => a + b, 0);
}

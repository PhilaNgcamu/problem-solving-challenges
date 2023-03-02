function findAverage(array) {
  if (!array.length) return 0;
  return array.reduce((sum, number) => sum + number) / array.length;
}
console.log(findAverage([2, 3, 4, 5, 6]));

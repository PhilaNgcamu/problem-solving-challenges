// Codewars > Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  return [
    input.filter((num) => num > 0).length,
    input.filter((num) => num < 0).reduce((a, b) => a + b, 0),
  ];
}

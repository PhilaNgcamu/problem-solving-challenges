// Codewars > Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  const count = input.filter((num) => num > 0).length;
  const sum = input.filter((num) => num < 0).reduce((a, b) => a + b, 0);
  if ((count && !sum) || (!count && sum)) return [count, sum];
  else if (!count && !sum) return [];
  return [count, sum];
}

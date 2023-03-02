// Codewars > Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  //sort the numbers array in decending order
  const array = numbers.sort((a, b) => a - b);
  //return the sum of the first two numbers of the sorted array
  console.log(numbers);
  return array[0] + array[1];
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

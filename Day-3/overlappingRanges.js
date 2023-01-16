// For this practice test you will determine the intersection between two sets.
// have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false.
function OverlappingRanges(arr) {
  //create array for ranges;
  let rangeOne = [];
  let rangeTwo = [];
  let count = 0;

  let max = rangeTwo.length > rangeOne.length ? rangeTwo : rangeOne,
    min = rangeOne.length < rangeTwo.length ? rangeOne : rangeTwo;

  //for loop for pushing the ranges
  for (let i = arr[0]; i <= arr[1]; i++) {
    rangeOne.push(i);
    //[4, 5, 6, 7, 8, 9, 10]
  }
  for (let i = arr[2]; i <= arr[3]; i++) {
    rangeTwo.push(i);
    //[ 2, 3, 4, 5, 6 ]
  }

  for (let i = 0; i < min.length; i++) {
    if (max.includes(min[i])) {
      count++;
    }
  }

  return count === arr[4];
}

console.log(OverlappingRanges([4, 10, 2, 6, 3]));

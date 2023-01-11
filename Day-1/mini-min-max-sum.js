// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. where arr = [1,2,3,4,5,6];
function miniMaxSum(arr) {
  // Write 2 variables, min and max;
  let min = 0,
    max = 0;
  let sort = arr.sort((a, b) => a - b);
  //write a for loop for finding the minimum value;
  for (let i = 0; i < sort.length - 1; i++) {
    min += sort[i];
  }
  //write a for loop for finding the maximum value;
  for (let i = 1; i < sort.length; i++) {
    max += sort[i];
  }
  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5, 6]);

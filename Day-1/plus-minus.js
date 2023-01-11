// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example: arr = [1,1,0,-1,-1];

// There are  elements, two positive, two negative and one zero.
function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let zero = 0;
  let negative = 0;
  //find the length of the array;
  let length = arr.length;
  //find the ratio of postive elements -- if(arr[i] > 0) increment++
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else zero++;
  }
  positive = (positive / length).toFixed(6);
  negative = (negative / length).toFixed(6);
  zero = (zero / length).toFixed(6);
  console.log(positive + "\n" + negative + "\n" + zero);
}

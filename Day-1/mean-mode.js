// For this challenge you will determine if the mode equals the mean in an array.
//  have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.
function MeanMode(arr) {
  //find the mean(what is it?) -- sumTotal / array.length = mean;
  //find the mode(what is it?) -- sort the array, then count the occurance of the number using the variable, maxCount, then if max count is greater than count, max === that number in the array.
  //return 1 if the mode === mean, else 0 if mode !== mean
  let maxCount = 1;
  let count = 0;
  let mode = 0;
  let sumTotal = arr.reduce((a, b) => a + b, 0);
  let mean = sumTotal / arr.length;
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i - 1]) count++;

    if (count > maxCount) {
      maxCount = count;
      mode = sortedArr[i];
    }
  }
  return mode === mean ? 1 : 0;
}

console.log(MeanMode([5, 3, 3, 3, 1]));

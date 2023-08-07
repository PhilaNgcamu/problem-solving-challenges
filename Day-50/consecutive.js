// For this challenge you will determine how to order an array of numbers consecutively.
// have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements.

function consecutive(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const resultArr = [];
  for (let i = sortedArr[0]; i <= sortedArr.at(-1); i++) {
    resultArr.push(i);
  }
  return resultArr.length - arr.length;
}

console.log(consecutive([4, 8, 6]));

// 1. How can we restate the problem, in your own words?
// Determine the missing numbers to make the array consecutive

// 2. What are the inputs that go into the problem?
//array of numbers

// 3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)
//input: [2,4,8] --> 4

// 4. Break down the problem (pseudocode)
//create an array for the range from the sorted array's first number till the last
//use a for loop to start from array's first number till the last
//add each number to the array
//return the length of the created array - arry

// 5. refactor the solved problem (if possible)

// For this challenge you will determine if numbers in an array can be sorted in a particular way.
// have the function WaveSorting(arr) take the array of positive integers stored in arr and return the string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. The input array will always contain at least 2 elements. More examples are given below as sample test cases.
function WaveSorting(arr) {
  //a1 > a2 < a3 > a4 < a5 > ...

  let array2 = [...arr];
  let array = [];
  let result = [];
  for (let i = 0; i < 3; i++) {
    array.push(array2.splice(array2.indexOf(Math.max(...array2)), 1)[0]);
  }
  array.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    result.push(array[i]);
    result.push(array2[i]);
  }
  console.log(result.filter((number) => number !== undefined));
  for (let i = 1; i < result.length - 1; i += 2) {
    if (result[i] > result[i - 1]) return "false";
  }

  return "true";
}

console.log(WaveSorting([0, 1, 2, 4, 1, 1, 1]));

// For this challenge you will determine if numbers in an array can be sorted in a particular way.
// have the function WaveSorting(arr) take the array of positive integers stored in arr and return the string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. The input array will always contain at least 2 elements. More examples are given below as sample test cases.
function WaveSorting(arr) {
  //a1 > a2 < a3 > a4 < a5 > ...

  let array2 = [...arr];
  let array = [];
  let result = [];
  for (let i = 0; i < 3; i++) {
    array[i] = array2.splice(array2.indexOf(Math.max(...array2)), 1)[0];
  }
  for (let i = 0; i < 3; i++) {
    result[i] = array[i];
    result[i + 1] = array2[i];
  }
  return result;
}

console.log(WaveSorting([0, 1, 2, 4, 1, 4]));
//[2, 0, 4, 1, 4, 1]

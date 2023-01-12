//  For this challenge you will be determining whether or not a number is a power of two.
// have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.
function PowersofTwo(num) {
  //Use Math square to find the output, if num is a real number return true else false
  return Number.isInteger(Math.sqrt(num)) ? "true" : "false";
}

console.log(PowersofTwo(16));

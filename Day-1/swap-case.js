// For this challenge you will be swapping the case of each character in the string.
// have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
function SwapCase(str) {
  //have an expression to return the results
  let results = "";
  //use a for loop to swap case of each character by using toLowerCase and toUpperCase
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) results += str[i].toUpperCase();
    else results += str[i].toLowerCase();
  }
  return results;
}

console.log(SwapCase("Hello World"));

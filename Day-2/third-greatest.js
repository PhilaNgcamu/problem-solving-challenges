// For this challenge you will determine the third largest string within an array.
// have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.
function ThirdGreatest(strArr) {
  //sort by length and return the element in index 2;
  return strArr.sort((a, b) => b.length - a.length)[2];
}

console.log(ThirdGreatest(["hello", "world", "after", "all"]));

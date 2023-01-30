// For this challenge you will determine the difference between two strings.
// have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the Hamming distance between them. The Hamming distance is the number of positions where the corresponding characters are different. For example: if strArr is ["coder", "codec"] then your program should return 1. The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers.
function HammingDistance(strArr) {
  let count = 0;
  let str1 = strArr[0];
  let str2 = strArr[1];

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count++;
  }
  return count;
}

console.log(HammingDistance(["helloworld", "worldhello"]));

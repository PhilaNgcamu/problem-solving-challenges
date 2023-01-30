// For this challenge you will perform a bitwise operation on two binary numbers.
// have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101"
function BitwiseOne(strArr) {
  let str1 = strArr[0];
  let str2 = strArr[1];

  let result = "";

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "0" && str2[i] === "0") {
      result += "0";
    } else result += "1";
  }

  return result;
}

console.log(BitwiseOne(["00011", "01010"]));

// Example: Reverse a string recursively
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

// console.log(reverseString("hello"));

// Example: Palindrome recursively

function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  return isPalindrome(str, start + 1, end - 1);
}

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"));

// Example: sum of digits recursively

function sumOfDigits(num) {
  if (num === 0) return num;
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(12345));

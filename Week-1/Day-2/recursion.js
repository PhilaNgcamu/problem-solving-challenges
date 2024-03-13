// Example: Reverse a string recursively
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

// console.log(reverseString("hello"));

// Example: Palindrome recursively

function isPalindrome(str) {
  if (str.length === 1) return true;
  else return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
}

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"));

// For this challenge you will be determining the next largest palindrome.
// have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number. The input can be any positive integer. For example: if num is 24, then your program should return 33 because that is the next largest number that is a palindrome.
function NextPalindrome(num) {
  if (num < 10) return (num + 1).toString();
  let number = num;

  for (let i = number; i >= 0; i++) {
    let result = i.toString().split("").reverse().join("");
    if (result === i.toString()) return i.toString();
  }
}

console.log(NextPalindrome(3426));

//Check for Palindrome: Write a function to check if an array is a palindrome (the elements read the same forwards and backwards).

function palindrome(arr) {
  return arr.toString() === arr.reverse().toString();
}

console.log(palindrome([1, 2, 3, 2, 1]));

// Write a JavaScript program to check whether a number is even or not.

function evenOrOdd(num) {
  if (num < 0) num = Math.abs(num);
  if (num === 1) return "Odd";
  else if (num === 2) return "Even";
  return evenOrOdd(num - 2);
}
console.log(evenOrOdd(20998));

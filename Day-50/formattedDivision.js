// For this challenge you will divide two numbers and print them in a certain format.
// have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero.

function formattedDivision(num1, num2) {
  const quotient = (num1 / num2).toFixed(4);
  const parts = quotient.split(".");
  const formattedString = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${formattedString}.${parts[1]}`;
}
console.log(formattedDivision(20000, 10));
// 1. How can we restate the problem, in your own words?
// divide num1 by num2 and return a string with formatted commas and 4 significant digits

// 2. What are the inputs that go into the problem?
//2 numbers

// 3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)
// num1=20000 num2=10 --> 2,000.000

// 4. Break down the problem (pseudocode)
// create a variable, 'quotient' and store the quotient of num1/num2 and round off to 4 decimal places
//create a variable 'parts' to split by a period
//create a variable 'formattedString' to store the 0th index of parts with the regex to insert a comma using replace with comma.
//return formattedString + 1st index of parts

// 5. refactor the solved problem (if possible)

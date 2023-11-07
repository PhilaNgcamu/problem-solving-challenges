function basicCalculator(v1, v2, operation) {
  // Check if v1 and v2 are not strings or if operation is not a valid operation
  if (
    typeof v1 !== "number" ||
    typeof v2 !== "number" ||
    typeof operation !== "string"
  ) {
    return "Invalid input. Please provide valid numbers and operation.";
  }

  // Perform the calculation based on the operation
  switch (operation) {
    case "+":
      return v1 + v2;
    case "-":
      return v1 - v2;
    case "*":
      return v1 * v2;
    case "/":
      if (v2 === 0) {
        return "Arithmetic error: Division by zero.";
      }
      return v1 / v2;
    default:
      return "Invalid operation. Please provide a valid operation (+, -, *, /).";
  }
}

const result1 = basicCalculator(5, 3, "+");
const result2 = basicCalculator(10, 2, "-");
const result3 = basicCalculator(6, 3, "*");
const result4 = basicCalculator(8, 0, "/");
const result5 = basicCalculator("5", 3, "+");

console.log(result1); // Output: 8
console.log(result2); // Output: 8
console.log(result3); // Output: 18
console.log(result4); // Output: 'Arithmetic error: Division by zero.'
console.log(result5); // Output: 'Invalid input. Please provide valid numbers and operation.'

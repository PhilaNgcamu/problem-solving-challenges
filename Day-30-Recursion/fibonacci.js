function fibonacci(num) {
  if (num <= 1) return [0, 1];
  const numbers = fibonacci(num - 1);
  numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
  return numbers;
}

console.log(fibonacci(3));

function highAndLow(numbers) {
  const arr = numbers.split(" ").sort((a, b) => b - a);
  return `${arr[0]} ${arr.at(-1)}`;
}

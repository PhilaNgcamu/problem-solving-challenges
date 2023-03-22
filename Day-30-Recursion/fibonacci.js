function fibonacci(num, array = [0, 1]) {
  if (num <= 1) return array;
  const [nextToLast, last] = array.slice(-2);
  return fibonacci(num - 1, [...array, nextToLast + last]);
}

console.log(fibonacci(13));

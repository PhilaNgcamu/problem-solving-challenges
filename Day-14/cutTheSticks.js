function cutTheSticks(arr) {
  // Write your code here
  const RESULT = [arr.length];

  while (arr.length > 0) {
    const SMALLEST_STICK = Math.min(...arr);
    let remainingSticks = [];

    for (const stick of arr) {
      const SIZE = stick - SMALLEST_STICK;

      if (SIZE > 0) {
        remainingSticks.push(SIZE);
      }
    }

    arr = remainingSticks;

    if (arr.length > 0) {
      RESULT.push(arr.length);
    }
  }

  return RESULT;
}
console.log(cutTheSticks([1, 2, 3]));

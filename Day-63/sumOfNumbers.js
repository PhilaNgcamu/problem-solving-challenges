function sumArray(array) {
  if (!array) return 0;
  if (
    array.every((number) => typeof number === "number") &&
    Array.isArray(array)
  ) {
    return array
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((res, val) => res + val, 0);
  }
}

const sum = (matrix) =>
  matrix.reduce(
    (sum, line, i) => sum + line[i] + line[matrix.length - i - 1],
    0
  );

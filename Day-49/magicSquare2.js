function isMagicSquare(matrix) {
  const magicSum = 15; // Magic sum for a 3x3 magic square

  // Check if all rows have the same sum
  for (let i = 0; i < 3; i++) {
    const rowSum = matrix[i].reduce((acc, num) => acc + num, 0);
    if (rowSum !== magicSum) {
      return false;
    }
  }

  // Check if all columns have the same sum
  for (let j = 0; j < 3; j++) {
    const colSum = matrix.reduce((acc, row) => acc + row[j], 0);
    if (colSum !== magicSum) {
      return false;
    }
  }

  // Check if the main diagonal has the same sum
  const diagonalSum1 = matrix[0][0] + matrix[1][1] + matrix[2][2];
  if (diagonalSum1 !== magicSum) {
    return false;
  }

  // Check if the secondary diagonal has the same sum
  const diagonalSum2 = matrix[0][2] + matrix[1][1] + matrix[2][0];
  if (diagonalSum2 !== magicSum) {
    return false;
  }

  // Check if all numbers are distinct (1 to 9)
  const flattenedMatrix = matrix.flat();
  const distinctNumbers = new Set(flattenedMatrix);
  if (
    distinctNumbers.size !== 9 ||
    !Array.from(distinctNumbers).every((num) => num >= 1 && num <= 9)
  ) {
    return false;
  }
  console.log(Array.from(distinctNumbers).every((num) => num >= 1 && num <= 9));

  return true;
}
console.log(
  isMagicSquare([
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ])
);

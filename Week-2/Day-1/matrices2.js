A = [
  [1, 2],
  [3, 4],
];

B = [
  [5, 6],
  [7, 8],
];

function matrixAddition(A, B) {
  const rows = A.length;
  const cols = A[0].length;

  let result = [];
  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = A[i][j] + B[i][j];
    }
  }
  return result;
}

console.log(matrixAddition(A, B));
// Diagonal Matrix
function diagonalSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    result += matrix[i][i];
  }
  return result;
}

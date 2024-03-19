// Problem: Given two matrices A and B, perform matrix addition and matrix multiplication
//C1      //C2       //C3
const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];
//A = rows, C1-3 = columns

function matrixAddition(A, B) {
  const rows = A.length;
  const cols = A[0].length;

  // Create a new matrix to store the result
  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = A[i][j] + B[i][j];
    }
  }
  return result;
}
console.log(matrixAddition(A, B));

function matrixMultiplication(A, B) {
  const rows = A.length;
  const cols = A[0].length;

  // Create a new matrix to store the result
  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = A[i][j] * B[i][j];
    }
  }
  return result;
}
console.log(matrixMultiplication(A, B));

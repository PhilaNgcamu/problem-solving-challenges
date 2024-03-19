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
  const rowsA = A.length;
  const colsA = A[0].length;
  const colsB = B[0].length;

  // Create a new matrix to store the result
  const result = [];

  // Iterate through each row of matrix A
  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    // Iterate through each column of matrix B
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      // Iterate through each element of row i of matrix A and column j of matrix B
      for (let k = 0; k < colsA; k++) {
        sum += A[i][k] * B[k][j];
      }
      // 9 + 12 + 9 = 30
      // (1 * 8) + (2 * 5) + (3 * 2) = 24
      // (1 * 7) + (2 * 4) + (3 * 1) = 18
      result[i][j] = sum;
    }
  }

  return result;
}

// Test matrix multiplication
console.log("\nMatrix Multiplication:");
console.log(matrixMultiplication(A, B));

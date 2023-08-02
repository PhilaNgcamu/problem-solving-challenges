// Determine it's a magic square
const isMagicSquare = (matrix) => {
  const sum = matrix[0][0] + matrix[0][1] + matrix[0][2];
  const isMatrix = true;
  //Check for each row
  for (let i = 0; i < matrix.length; i++) {
    const currentSum = matrix[i][0] + matrix[i][1] + matrix[i][2];
    if (currentSum !== sum) return false;
  }
  //check for each column
  for (let i = 0; i < matrix.length; i++) {
    const currentSum = matrix[i][0] + matrix[i][1] + matrix[i][2];
    if (currentSum !== sum) return false;
  }
  //check for each diagonal
  for (let i = 0; i < matrix.length; i++) {
    const currentSum = matrix[i][0] + matrix[i][1] + matrix[i][2];
    if (currentSum !== sum) return false;
  }
  return isMatrix;
};
console.log(
  isMagicSquare([
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ])
);
//1.How can we restate the problem, in your own words?
// find the sum of the rows, diagonals and columns. If they are equal return true, else false

//2. What are the inputs that go into the problem?
// an array of 3 by 3 matrix

//3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)
// input: 3 by 3 --> true else false
//4. Break down the problem (pseudocode)
// find the sum of the first row/column/diagonal
// use a for loop to loop though the rows
// if the sum of each row is equal, then boolean should be true else false
//5. refactor the solved problem (if possible)

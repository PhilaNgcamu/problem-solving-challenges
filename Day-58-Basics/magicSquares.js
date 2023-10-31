// Determine if it's a magic square or not
// The sum of rows should be equal to the sum of columns should be equal to the sum of diagonals, if not return "It's not a magic square"
const matrix = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
function magicSquares(arr) {
  const expectedSum = arr[0].reduce((sum, num) => sum + num, 0);

  for (let i = 0; i < arr.length; i++) {
    let colSum = 0;

    for (let j = 0; j < arr.length; j++) {
      colSum += arr[0][j];
    }
    if (colSum !== expectedSum) return "It's not a magic square";
  }

  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;

    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
    }
    if (rowSum !== expectedSum) return "It's not a magic square";
  }

  let diagSum = 0;

  for (let i = 0; i < arr.length; i++) {
    diagSum += arr[i][i];
  }
  if (diagSum !== expectedSum) return "It's not a magic square";

  return true;
}

console.log(magicSquares(matrix));

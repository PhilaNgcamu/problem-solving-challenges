function diagonal(matrix) {
  let principalDiagonal = matrix.reduce(
    (sum, val, index) => sum + val[index],
    0
  );
  let secondaryDiagonal = matrix.reduce(
    (sum, val, index) => sum + val[val.length - 1 - index],
    0
  );
  return principalDiagonal > secondaryDiagonal
    ? "Principal Diagonal win!"
    : secondaryDiagonal > principalDiagonal
    ? "Secondary Diagonal win!"
    : "Draw!";
}

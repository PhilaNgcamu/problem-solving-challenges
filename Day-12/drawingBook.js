// Hackerrank > Drawing Book

function pageCount(n, p) {
  // n = length of book
  // p = page of the book desired
  let countFront = 0;
  let countBack = 0;

  if (n - p === 1 || n - p === n - 1) return 0;

  countFront = Math.floor(p / 2);
  countBack = Math.floor((n - p) / 2);
  if (countBack >= countFront) return countFront;
  return countBack;
}

console.log(pageCount(101, 92));

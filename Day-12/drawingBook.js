// Hackerrank > Drawing Book

function pageCount(n, p) {
  // n = length of book
  // p = page of the book desired
  let countFront = 0;
  let countBack = 0;

  if (n - p === 1 || n - p === n - 1) return 0;

  // use a for loop to count to a page
  for (let i = 1; i <= n; i++) {
    // -- if a page === i then Math.floor(i/2)
    if (p === i) {
      countFront += Math.floor(i / 2);
    }
  }
  countBack = Math.floor((n - p) / 2);
  if (countBack >= countFront) return countFront;
  return countBack;
}

console.log(pageCount(100, 92));

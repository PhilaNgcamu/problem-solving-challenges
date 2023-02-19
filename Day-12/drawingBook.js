// Hackerrank > Drawing Book

function pageCount(n, p) {
  // n = length of book
  // p = page of the book desired
  let countFront = 0;
  let countBack = 0;

  // use a for loop to count to a page
  for (let i = 1; i <= n; i++) {
    // -- if a page === i then Math.floor(i/2)
    if (p === i) {
      countFront += Math.floor(i / 2);
    }
  }
  // use a for loop to count to a page
  for (let i = 100; i <= 0; i--) {
    // -- if a page === i then Math.floor(i/2)
    if (p === i) {
      countBack += Math.floor(i / 2);
    }
  }
  if (countBack > countFront) return countBack;
  return countFront;
}

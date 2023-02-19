// Hackerrank > Drawing Book

function pageCount(n, p) {
  // n = length of book
  // p = page of the book desired
  const frontPages = Math.floor(p / 2);
  const backPages = Math.floor(n / 2 - frontPages);

  return Math.min(frontPages, backPages);
}

console.log(pageCount(101, 92));

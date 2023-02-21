function libraryFine(d1, m1, y1, d2, m2, y2) {
  // If the book is returned on or before the expected return date then fine = 0
  // If the book is returned after the expected return day but still within the same calendar month and year as the expected return date then fine = 15 * no. of days late
  //If the book is returned after the expected return month but still within the same calendar year as the expected return date then fine = 500 * no. of months late
  //If the book is returned after the calendar year in which it was expected then fine 10000
  if (d1 <= d2) return 0;

  if (m1 === m2 && y1 === y2) return (fine = (d1 - d2) * 15);
  else if (m1 >= m2 && y1 === y2) return (fine = (m1 - m2) * 500);
  else if (y1 > y2) return (fine = 10000);
}
console.log(libraryFine(14, 7, 2018, 5, 7, 2018));

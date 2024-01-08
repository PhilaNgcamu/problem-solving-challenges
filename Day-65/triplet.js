function gimme(triplet) {
  const number = triplet.filter(
    (num) => Math.max(...triplet) > num && Math.min(...triplet) < num
  );
  console.log(number);
  return triplet.indexOf(number[0]);
}

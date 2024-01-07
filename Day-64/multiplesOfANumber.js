function findMultiples(integer, limit) {
  let arr = [];
  let currNumber = integer;
  while (currNumber <= limit) {
    arr.push(currNumber);
    currNumber = currNumber + integer;
  }

  return arr;
}

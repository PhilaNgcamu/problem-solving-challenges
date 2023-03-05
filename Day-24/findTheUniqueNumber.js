// Codewars > Find the unique number
function findUniq(arr) {
  let result = arr.sort((a, b) => a - b);
  return result[0] === result[1] ? result.pop() : result[0];
}

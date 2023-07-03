// Codewars > Array.diff

function arrayDiff(a, b) {
  return a.includes(b[0]) ? [] : a;
}

console.log(arrayDiff([1], [3])); //--> []

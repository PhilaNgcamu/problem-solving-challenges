// Codewars > Array.diff

function arrayDiff(a, b) {
  return a.filter((value) => !b.includes(value));
}

console.log(arrayDiff([3, 3, -5], [3])); //--> [1,2]

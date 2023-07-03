// Codewars > Array.diff

function arrayDiff(a, b) {
  //have a copy of a
  //convert copy of a to a string

  let copyOfA = [...a].join("");
  //use a for loop on
  for (let i = 0; i < b.length; i++) {
    //--> if an element in b exists in stringified copy of a then replace that with an empty string globally
    if (copyOfA.includes(b[i]))
      copyOfA = copyOfA.replace(new RegExp(b[i], "g"), "");
  }

  // convert copy of a into an array

  //return the copy
  return copyOfA;
}

console.log(arrayDiff([3, 3, -5], [3])); //--> [1,2]

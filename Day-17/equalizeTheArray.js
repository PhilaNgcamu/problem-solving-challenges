// Hackerrank > Equalize The Array
function equalizeArray(arr) {
  // let counter = 0;
  let counter = 0;
  // use 2 for loop to compare each number to another that is not exhausted
  for (let i = 0; i < arr.length; i++) {
    //if the outer loop is in the last element break
    if (i === arr.length - 1) break;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i - 1] === arr[i]) break;
      //if current number === any number counter ++
      else if (arr[i] === arr[j]) counter++;
    }
  }
  //return counter
  return counter;
}

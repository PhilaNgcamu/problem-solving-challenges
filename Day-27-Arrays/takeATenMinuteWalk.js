// Codewars > Take a Ten Minutes Walk
function isValidWalk(walk) {
  if (walk.length === 1) return false;
  // declare the obj
  else if (walk.length === 10) {
    const obj = {};
    //loop over each letter
    for (let i = 0; i < walk.length; i++) {
      // if the letter exists in the object increment, else assign 1
      obj[walk[i]] = (obj[walk[i]] || 0) + 1;
    }
    // let the sum = first number of the array
    const array = [...Object.values(obj)];
    let sum = array[0];
    // loop over the array, if sum > 0 then sum -= letter occurance else sum += letter occurance
    for (let i = 1; i < array.length; i++) {
      if (sum > 0) sum -= array[i];
      else if (sum < 0) sum += array[i];
    }
    //return sum === 0
    return sum === 0;
  }
  return false;
}

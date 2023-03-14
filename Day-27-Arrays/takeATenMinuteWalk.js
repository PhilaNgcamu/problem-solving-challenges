// Codewars > Take a Ten Minutes Walk
function isValidWalk(walk) {
  if (walk.length === 1 || walk.length !== 10 || !walk.length) return false;
  // declare the obj
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
    else if (sum === 0) return true;
  }
  console.log(sum);
  //return sum === 0
  return sum === 0;
}

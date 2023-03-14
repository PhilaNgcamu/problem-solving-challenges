function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  // declare the obj
  const obj = {};
  //loop over each letter
  for (let i = 0; i < walk.length; i++) {
    // if the letter exists in the object increment, else assign 1
    obj[walk[i]] = (obj[walk[i]] || 0) + 1;
  }
  //if array length is odd then return false
  //return object of n === object of s and object of e === object of w
  return obj["n"] === obj["s"] && obj["e"] === obj["w"];
}

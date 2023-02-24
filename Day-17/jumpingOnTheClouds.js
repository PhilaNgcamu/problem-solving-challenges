function jumpingOnClouds(c) {
  // let counter = 0
  let counter = 0;
  // loop through the array
  for (let i = 0; i < c.length; i++) {
    //if the player is at cloud 1 then jump to the next the same counter
    //0 0 1 0 0 1 0
    if (c[i] === 0 && c[i + 1] === 1) {
      i += 1;
      counter++;
    } else if (c[i] === 0 && c[i + 1] === 0) {
      counter++;
    }
  }
  return counter;
}

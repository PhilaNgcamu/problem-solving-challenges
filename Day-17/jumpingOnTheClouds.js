function jumpingOnClouds(c) {
  // let counter = 0
  let counter = 0;
  // loop through the array
  for (let i = 0; i < c.length; i++) {
    //if the player is at cloud 1 then jump to the next the same counter
    if (i + 2 < c.length && c[i + 2] === 0) i += 1;
  }
  return counter;
}

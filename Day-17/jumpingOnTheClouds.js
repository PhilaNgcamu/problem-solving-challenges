function jumpingOnClouds(c) {
  // let counter = 0
  let counter = 0;
  // loop through the array
  for (let i = 0; i < c.length; i++) {
    //if the player is at cloud 1 then jump to the next the same counter
    if (c[i] === 1) {
      continue;
    } else if (c[i + 1] === 0) counter += 2;
    else if (c[i] === 0 && c[i + 1] === 1) {
      continue;
    }
  }
  return counter;
}
